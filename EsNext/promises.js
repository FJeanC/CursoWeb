function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Teste')
    .then(frase => frase.concat('?!!'))
    .then(outaFrase => console.log(outaFrase))