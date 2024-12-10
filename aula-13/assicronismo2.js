//Exemplo 02: setTimeOut(Função que cria um timer)

console.log("Antes do setTimeout")

setTimeout(() => {
    console.log("Isso aqui vai ser executado apos 2 segundos")
}, 2 * 1000);

console.log("Depois do setTimeout")