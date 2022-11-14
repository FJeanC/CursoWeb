import Link from 'next/link'
import styles from './Estiloso.module.css'
export default function Estiloso() {
    return (
        <div>
            <Link href='/'>Voltar</Link>
            <h1 className={styles.roxo}>Estilo usando CSS Módulos</h1>
        </div>
    )
}