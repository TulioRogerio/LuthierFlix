// Link é o componente do Next.js para navegação client-side (sem recarregar a página)
import Link from "next/link";
// CSS Modules: estilos escopados apenas para este layout
import styles from "./layout.module.css";
// CSS globais aplicados a toda a aplicação
import "./globals.css";
import "./theme.css";
// "@/..." é um alias configurado (geralmente em jsconfig.json) que aponta para a pasta src/
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/contexts/ThemeContext";

// Metadados da página — o Next.js usa isso para gerar as tags <title> e <meta> no <head>
export const metadata = {
  title: "LuthierFlix",
  description: "Onde a arte encontra a música",
};

// Layout raiz: envolve TODAS as páginas. O Next.js injeta o conteúdo da rota atual em "children"
export default function RootLayout({ children }) {
  return (
    // ThemeProvider envolve toda a árvore para que qualquer componente possa acessar o tema via Context
    <ThemeProvider>
      <html lang="pt-br" data-theme="light">
        <body className={styles.body}>
          <header className={styles.header}>
            <h1><Link href="/">LuthierFlix</Link></h1>
            <nav>
              <Link href="/videos">Vídeos</Link>
              <Link href="/musics">Músicas</Link>
            </nav>
          </header>

          {/* Aqui é onde o conteúdo da rota atual é renderizado */}
          <main className={styles.main}>
            {children}
          </main>

          <footer className={styles.footer}>
            <p>&copy; 2026 - Desenvolvido por Tulio | Direitos Autorais</p>
            <p>Ao utilizar esta plataforma, você concorda com nossos Termos de Uso e Política de Privacidade.</p>
            {/* Botão para alternar entre tema claro e escuro */}
            <ThemeToggle />
          </footer>
        </body>
      </html>
    </ThemeProvider>
  );
}
