import Link from 'next/link'
import Navegador from '../components/Navegador'
export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexWrap: 'wrap'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso"/>
            <Navegador texto="Exemplo" destino="/exemplo" cor="purple"/>
            <Navegador texto= "JSX" destino="/jsx" cor="crimson"/>
            <Navegador texto= "Navegação #001" destino="/navegacao/" cor="green"/>
            <Navegador texto= "Navegação #002" destino="/cliente/sp-2/123" cor="blue"/>
            <Navegador texto= "Navegação Com Estado" destino="/estado" cor="pink"/>
            <Navegador texto= "Integração com API #01" destino="/integracao_1" cor="yellow"/>
        </div>
    )
}