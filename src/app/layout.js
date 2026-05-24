import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "LuthierFlix",
  description: "Onde a arte encontra a música",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <h1>LuthierFlix</h1>
          <nav>
            <Link href="/">Início</Link>
            <Link href="/videos">Vídeos</Link>
            <Link href="/musics">Músicas</Link>
          </nav>
        </header>

        <main>
          {children}
        </main>

        <footer>
          <p>&copy; 2026 - Desenvolvido por Tulio | Direitos Autorais</p>
          <p>Ao utilizar esta plataforma, você concorda com nossos Termos de Uso e Política de Privacidade.</p>
        </footer>
      </body>
    </html>
  );
}
