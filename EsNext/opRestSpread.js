// operador ...

const funcionario = {nome: 'Maria', salario: 5000}

const clone = {ativo: true, ...funcionario}
console.log(funcionario)
console.log(clone)

const grupoA = ['Joao', 'Pedro', 'Maria']
const grupoB = ['Gloria', ...grupoA, 'Rafaela']
console.log(grupoB)