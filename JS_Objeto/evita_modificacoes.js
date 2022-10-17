// Object.preventExtensions

const produto = Object.preventExtensions({
    nome : 'Teste', preco: 1.99, tag: 'promo'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Bolo'
delete produto.tag
console.log(produto)
produto.vel = '320'
console.log(produto)

// Object.seal

const Pessoa = {nome: 'Ju', idade: 35}
Object.seal(Pessoa)
console.log('Selado: ', Object.isSealed(Pessoa))
delete Pessoa.nome 
console.log(Pessoa)
Pessoa.nome = 'Mudado'
console.log(Pessoa)

//Object.freeze