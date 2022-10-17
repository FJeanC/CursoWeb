Array.prototype.filter2 = function(callback) {
    const auxArray = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            auxArray.push(this[i])
        }
    }
    return auxArray

}

const produtos = [
    {nome:'Note', preco:2499, fragil:true},
    {nome:'iPad', preco:4199, fragil:true},
    {nome:'Copo de vidro', preco:12.49, fragil:true},
    {nome:'Copo de plástico', preco:11.99, fragil:false},
]

const produtosCaros = e => e.preco >= 500
const produtoFragil = e => e.fragil

console.log(produtos.filter2(produtoFragil))
console.log(produtos.filter2(produtosCaros))

console.log(produtos.filter2(produtoFragil).filter2(produtosCaros
    ))