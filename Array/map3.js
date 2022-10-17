Array.prototype.map2 = function(callback){
    const aux = []
    for(let i = 0; i < this.length; i++) {
        aux.push(callback(this[i], i, this))

    }
    return aux
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

console.log(carrinho)

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const result = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(result)