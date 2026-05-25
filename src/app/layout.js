import Link from "next/link";
import styles from "./layout.module.css";
import "./globals.css";

export const metadata = {
  title: "LuthierFlix",
  description: "Onde a arte encontra a música",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={styles.body}>
        <header className={styles.header}>
          <h1><Link href="/">LuthierFlix</Link></h1>
          <nav>
            <Link href="/videos">Vídeos</Link>
            <Link href="/musics">Músicas</Link>
          </nav>
        </header>

        <main className={styles.main}>
          {children}
        </main>

        <footer className={styles.footer}>
          <p>&copy; 2026 - Desenvolvido por Tulio | Direitos Autorais</p>
          <p>Ao utilizar esta plataforma, você concorda com nossos Termos de Uso e Política de Privacidade.</p>
        </footer>
      </body>
    </html>
  );
}
