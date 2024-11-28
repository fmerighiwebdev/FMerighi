import "./globals.css";

export const metadata = {
  title: "FMerighi - Sviluppatore Web / Software - Rovereto",
  description:
    "Sviluppatore Web e Software a Rovereto (TN). Esperto in sviluppo di siti web, applicazioni web e soluzioni digitali personalizzate per aziende e startup. Scopri come posso aiutarti a creare esperienze digitali innovative e di impatto.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="FMerighi" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  );
}
