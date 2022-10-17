const produtos = [
    {nome:'Note', preco:2499, fragil:true},
    {nome:'iPad', preco:4199, fragil:true},
    {nome:'Copo de vidro', preco:12.49, fragil:true},
    {nome:'Copo de plástico', preco:11.99, fragil:false},
]

console.log(produtos.filter(function(p) {
    return false
}))

const produtosCaros = e => e.preco >= 500
const produtoFragil = e => e.fragil

console.log(produtos.filter(produtoFragil))
console.log(produtos.filter(produtosCaros))

console.log(produtos.filter(produtoFragil).filter(produtosCaros
    ))