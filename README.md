# C.G.B Artisan

Site vitrine (landing page) de C.G.B Artisan, couvreur à Mouroux (77). Next.js (App Router) + Tailwind CSS.

## Développement

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de production
```

## Formulaire de devis

Le formulaire envoie un email via `POST /api/contact` (nodemailer). Créer un fichier `.env.local` :

```env
SMTP_HOST=smtp.exemple.com
SMTP_PORT=587          # 465 pour SSL
SMTP_USER=adresse@exemple.com
SMTP_PASS=mot-de-passe-ou-mot-de-passe-d-application
CONTACT_TO=Gheorghe1779cc@icloud.com   # optionnel, défaut : email du site
```

Sans ces variables, le formulaire affiche un message invitant à appeler par téléphone.

## Structure

- `app/` — layout, page d'accueil, route API `contact`
- `components/` — une section par fichier (Header, Hero, Services, …)
- `lib/site.ts` — téléphone, email, navigation, types de projet
- `public/images/` — photos du hero et des réalisations
