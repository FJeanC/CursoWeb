const alunos = [
    {nome:'Joao', nota:7.1, bolsista: false},
    {nome:'Maria', nota:9.9, bolsista: true},
    {nome:'Pedro', nota:9.1, bolsista: false},
    {nome:'Ana', nota:8.3, bolsista: true},
]

console.log(alunos.map(a=>a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)