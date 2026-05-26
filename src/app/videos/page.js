// CSS Modules: classes locais a este arquivo, evitando conflitos de nomes
import styles from "./page.module.css";

// Componente da rota "/videos" (definida pelo nome da pasta no App Router do Next.js)
export default function VideosPage() {
    return (
        <div>
            <h2 className={styles.title}>Vídeos</h2>
            <p>Lista de vídeos</p>
        </div>
    );
}