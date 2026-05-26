// CSS Modules: classes locais a este arquivo, evitando conflitos de nomes
import styles from "./page.module.css";

// Componente da rota "/musics" (definida pelo nome da pasta no App Router do Next.js)
export default function MusicsPage() {
    return (
        // Fragment: agrupa elementos sem adicionar um nó extra ao DOM
        <>
            <h2 className={styles.title}>Músicas</h2>
            <p>Lista de músicas</p>
        </>
    );
}