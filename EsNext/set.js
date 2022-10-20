// nao aceita repeticao/ñ indexado
const letras = new Set()
letras.add('a')
letras.add('b').add('c')
letras.add('b')
letras.add('b')
letras.add('d')
console.log(letras)
console.log(letras.size)
console.log(letras.has('a'))
letras.delete('a')
console.log(letras)

