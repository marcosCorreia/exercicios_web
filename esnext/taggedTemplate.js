function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$ ${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log( real `1x de ${preco} ou 3x de ${precoParcela}.`)


//************************************************************************************************************

const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true})

console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})