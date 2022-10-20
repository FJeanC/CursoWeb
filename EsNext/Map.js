const tecnologia = new Map()
tecnologia.set('react', {frameWork : false})
tecnologia.set('angular', {frameWork: true})

console.log(tecnologia.react) // undefined
console.log(tecnologia.get('react').frameWork)

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((valor, chave)=> {
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)