const fs = require('fs')

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

// 3. async/await 

// Executa linha por linha

async function leituraDeDados() {
    
    console.log("Isso é executado antes da promise ser resolvida");
    

    try {
        const dadosDoArquivoLido = await lerArquivoPromise(); // Espera a promessa ser resolvida para avançar no codigo!

        console.log(dadosDoArquivoLido);
    
        console.log("Isso é executado DEPOIS da promise ser resolvida");
    } catch(erro) {
        console.log("Isso aqui é executado depois da promise (com erro).");
    } finally {
        console.log("Mostar independento do sucesso ou falha!");
    };
};

leituraDeDados();