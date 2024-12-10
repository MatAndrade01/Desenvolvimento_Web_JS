const fs = require("fs");

// 1. Lendo um arquivo JSON.

fs.readFile("aula-14/.prettierrc.json",(error, dados) => {
    if(error) {
        console.log("Erro:", error);
    } else {
        // Dados: Buffer com os dados do arquivo json.
        const dadosObjeto = JSON.parse(String(dados)); // Convertendo o Buffer em um objeto do JS.
        console.log(dadosObjeto.singleQuote);
    }
});

// 2. Convertendo JSON, em formato de string, para um objeto

const jsonString = "{"nome": "Matheus"}";

console.log(JSON.parse(jsonString));

// 3. Convertendo um objeto JS em JSON

const pessoa = {
    nome: "Tony Stark",
    papel: "Home de Ferro"
};

console.log(JSON.stringify(pessoa));