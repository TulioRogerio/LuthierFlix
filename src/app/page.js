import VideosPage from "./videos/page";
import MusicsPage from "./musics/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h2 className={styles.title}>Início</h2>
      <VideosPage />
      <MusicsPage />
    </>
  );
}
