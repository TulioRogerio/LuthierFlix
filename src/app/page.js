import VideosPage from "./videos/page";                 // Importa os componentes de outras páginas (atualmente não estão sendo usados no JSX abaixo)
import MusicsPage from "./musics/page";
import styles from "./page.module.css";                 // Importa os estilos como CSS Modules — cada classe vira uma propriedade do objeto "styles"

export default function Home() {                        // Componente da página inicial (rota "/"), renderizado pelo App Router do Next.js
  return (
    // Fragment (<>...</>) permite retornar múltiplos elementos sem criar uma div extra no DOM
    <>
      <h2 className={styles.title}>Início</h2>
    </>
  );
}
