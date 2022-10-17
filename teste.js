// function Pessoa(nome) {
//     this.nome = nome 

//     this.falar = function() {
//         console.log(`Meu nome é ${this.nome}`)
//     }
// }

// const p1 = new Pessoa('Jean')
// p1.falar()


// function fatorial(numero) {
//     result = 1
//     // for(let i = numero; i>0; i--) {
//     //     result *= numero
//     //     numero--
//     // }
//     for(let i = 1; i <= numero; i ++) {
//         result *= i
//     }
//     return result
// }

// const troco = valor => {
//     const notas = [100, 50, 20, 10, 5, 1]
//     notasTroco = [0, 0, 0, 0, 0, 0]
//     for(let i = 0; i < notas.length; i++) {
//         notasTroco[i] = Math.floor(valor / notas[i])
//         valor = valor % notas[i]
//     }
//     return notasTroco
// }

// console.log(troco(1500))

const a = 1
const b = 2
const c = 3

const obj1 = {a, b, c}
console.log(obj1)