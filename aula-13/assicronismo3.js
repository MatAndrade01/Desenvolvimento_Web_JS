const fs = require('fs')

// 2. Promises (Promessas)

console.log("Antes da criação da promisse")

function lerArquivoPromise() {
    return new Promise((resolve, reject) => {
        fs.readFile("aula-13/arquivo.txt", (erro, conteudoDoArquivo) => {
            if(erro) {
                reject("Ocorreu um erro ao ler o arquivo");
            } else {
                resolve(String(conteudoDoArquivo));
            };
        });
    });
};

// Foco a partir daqui...
lerArquivoPromise()
    .then((retornoDoResolverDaPromessa) => {
    console.log("Deu certo:", retornoDoResolverDaPromessa);
    })
    .catch((erro) => {
    console.log("Deu ruim:", erro);
    })
    .finally(() => {
    console.log("Isso aqui vai ser executado independente do sucesso ou do fracasso da promessa, no final dela!");
    });