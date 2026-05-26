// Importa os componentes de outras páginas (atualmente não estão sendo usados no JSX abaixo)
import VideosPage from "./videos/page";
import MusicsPage from "./musics/page";
// Importa os estilos como CSS Modules — cada classe vira uma propriedade do objeto "styles"
import styles from "./page.module.css";

// Componente da página inicial (rota "/"), renderizado pelo App Router do Next.js
export default function Home() {
  return (
    // Fragment (<>...</>) permite retornar múltiplos elementos sem criar uma div extra no DOM
    <>
      <h2 className={styles.title}>Início</h2>
    </>
  );
}
