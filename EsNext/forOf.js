for(let letra of "Cod3r") {
    console.log(letra)
}

const Ecma = ['Map', 'Set', 'Promise']

for(let i in Ecma) {
    console.log(i)
}

for(let assunto of Ecma) {
    console.log(assunto)
}

const assuntoMap = new Map([
    ['Map', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let assunto of assuntoMap) {
    console.log(assunto)
}

for(let chave of assuntoMap.keys()) {
    console.log(chave)
}

for(let valor of assuntoMap.values()){
    console.log(valor)
}

for(let [ch, vl] of assuntoMap.entries()) {
    console.log(ch, vl)
}