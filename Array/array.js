// Array é um objeto
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')

console.log(aprovados)

aprovados = ['Ana', 'Bia', 'Carlos']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Pedro'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafa'

console.log(aprovados)

aprovados.sort()

console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados.splice(1,1)
console.log(aprovados)