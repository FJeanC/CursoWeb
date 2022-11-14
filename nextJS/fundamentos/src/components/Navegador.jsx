import Link from "next/link";
import styles from '../pages/Navegador.module.css'

export default function Navegador(props) {
    return (
        <Link href={props.destino}>
            <div className={styles.navegador} style={{
                backgroundColor: props.cor ?? "dodgerblue"
            }}>
                {props.texto}
            </div>
        </Link>
    )
}