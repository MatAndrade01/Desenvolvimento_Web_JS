const fs = require('fs');

// - 1. Callbacks

console.log('Antes da função de ler o arquivo...')

// Função assicrona (ler um arquivo leva um tempo);
fs.readFile('aula-13/arquivo.txt', (erro, conteudoDoArquivo) => {
    if (erro) {
        console.log("Ocorreu um erro ao ler o arquivo", erro)
    } else {
        console.log(String(conteudoDoArquivo))
    }
});

console.log("Depois da função de ler o arquivo...")

