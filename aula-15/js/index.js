// Fetch API

// then / catch

fetch('https://viacep.com.br/ws/01001000/json/')
    .then((response) => {
        //.jssn() também é uma promessa!
        response.json().then((dados) => console.log(dados));
    })
    .catch((erro) => {
        console.log(erro);
    });

// async/await

async function obterDadosDoCep() {
    try {
        const response = await fetch('https://viacep.com.br/ws/01001000/json/');
        const data = await response.json();
        console.log(data);
    } catch(erro) {
        console.log("Deu errado", erro);
    } finally {
        console.log("Terminou a requisição");
    };
};

obterDadosDoCep();