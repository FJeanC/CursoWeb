const alunos = [
    {nome:'Joao', nota:7.1, bolsista: false},
    {nome:'Maria', nota:9.9, bolsista: true},
    {nome:'Pedro', nota:9.1, bolsista: true},
    {nome:'Ana', nota:8.3, bolsista: false},
]


// todos os alunos são bolsistas ?

const todosBolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsista))

// algum aluno é bolsista ?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))