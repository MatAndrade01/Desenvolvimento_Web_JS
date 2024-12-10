async function obterUsers() {
    try {
        const response = await fetch('https://dummyapi.io/data/v1/user', {
            headers: {
                "app-id": '63f77cc1b7f489f0b351b30f'
            }
        });
        const users = await response.json();
        console.log(users.data);
    } catch (erro) {
        console.error('Erro ao obter usuários:', erro);
    }
};

obterUsers();

async function creatUser() {

    const userDate = {
        fistName: "Matheus",
        lastName: "Andrade",
        email: "matheus.andrade@gmail.com"
    }

    try {
        await fetch('https://dummyapi.io/data/v1/user/crated', {
            method: 'POST',
            headers: {
                "app-id": '63f77cc1b7f489f0b351b30f',
                "Content-Type": "aplication/json"
            },
            body: JSON.stringify(userDate),
        });
    } catch (erro) {
        console.error('Erro ao obter usuários:', erro);
    };
};

creatUser();

async function getUser() {
    try{
        const response = await fetch('https://dummyapi.io/data/v1/user/id', {
            headers: {
                "app-id": '63f77cc1b7f489f0b351b30f'
            }
        });
        const user = await response.json();
        console.log(user.data);
    } catch (erro) {
        console.log("Deu erro", erro);
    };
};

getUser();