import nodemailer from "nodemailer";
import { projectTypes, site } from "@/lib/site";

type Payload = Record<string, unknown>;

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const json = (body: object, status = 200) => Response.json(body, { status });

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Requête invalide." }, 400);
  }

  // Honeypot : les bots remplissent ce champ, on répond OK sans rien envoyer.
  if (clean(body.website, 200)) return json({ ok: true });

  const nom = clean(body.nom, 120);
  const tel = clean(body.tel, 40);
  const email = clean(body.email, 200);
  const projet = clean(body.projet, 80);
  const message = clean(body.message, 5000);

  if (!nom || !tel || !email || !message) {
    return json({ error: "Merci de remplir tous les champs." }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Adresse email invalide." }, 400);
  }
  if (projet && !projectTypes.includes(projet)) {
    return json({ error: "Type de projet invalide." }, 400);
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    ADMIN_EMAIL,
  } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("[contact] SMTP_HOST / SMTP_USER / SMTP_PASS manquants");
    return json(
      {
        error: `L'envoi est momentanément indisponible. Appelez-nous au ${site.phone}.`,
      },
      500,
    );
  }

  const port = Number(SMTP_PORT ?? 587);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: SMTP_FROM || `"Site ${site.name}" <${SMTP_USER}>`,
      to: ADMIN_EMAIL || site.email,
      replyTo: `"${nom.replace(/["\r\n]/g, "")}" <${email}>`,
      subject: `Demande de devis — ${projet || "Autre"} — ${nom.replace(/[\r\n]/g, " ")}`,
      text: [
        `Nom : ${nom}`,
        `Téléphone : ${tel}`,
        `Email : ${email}`,
        `Type de projet : ${projet || "Autre"}`,
        "",
        message,
      ].join("\n"),
    });
  } catch (err) {
    console.error("[contact] échec d'envoi", err);
    return json(
      {
        error: `L'envoi a échoué. Appelez-nous au ${site.phone}.`,
      },
      502,
    );
  }

  return json({ ok: true });
}
