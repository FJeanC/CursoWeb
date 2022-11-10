import React from 'react'
import ReactDOM from 'react-dom'

// import BomDia from './componentes/BomDia'

import Multi, { BoaTarde} from './componentes/Multiplos'

// const elemento = <h1>React</h1>
// ReactDOM.render(<BomDia nome="Guilherme" />, document.getElementById('root'))


ReactDOM.render(
    <div>
        <BoaTarde nome="Ana" />
        <Multi.BoaNoite nome="Bia" />
    </div>
, document.getElementById('root'))