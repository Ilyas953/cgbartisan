import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="section-pad">
        <article className="mx-auto max-w-3xl [&_a]:text-[var(--gold)] [&_a]:underline [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:font-body [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_p]:leading-[1.75] [&_p]:text-[var(--muted)] [&_p+p]:mt-3 [&_strong]:text-[var(--text)] [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-[var(--muted)] [&_li]:mt-1.5 [&_li]:leading-[1.7]">
          <h1 className="mb-2 text-[clamp(34px,4vw,48px)] font-medium text-white">
            {title}
          </h1>
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
