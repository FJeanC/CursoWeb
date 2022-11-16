import Layout from "../components/Layout";
import { useState } from "react";
export default function Estado() {

    let [numero, setNumero] = useState(0)

    function incrementar() {
        setNumero(++numero)
    }
    return (
        <Layout>
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}
    