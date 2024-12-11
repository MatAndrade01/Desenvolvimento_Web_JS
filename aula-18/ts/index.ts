// Aula 19 - POO

interface Ipessoa {
    nome: string;
    idade: number;
    altura: number;
    cpf: string

    dormir: () => void;
};

// Classe: abstracao
// Definindo uma abstracao de uma pessoa
class Pessoa implements Ipessoa {
    // Atributos: caracteristicas (variaveis)
    nome: string;
    idade: number;
    altura: number;
    private _cpf: string;

    // Metodos: acao (funcoes)

    // Metodo Construtor
    constructor(nome: string, idade: number, altura: number, cpf: string) {
        this.nome = nome,
        this.idade = idade,
        this.altura = altura,
        this._cpf = cpf
    };

    dormir() {
        console.log("Dormindo...😴");
    };

    // acessor: getter
    get cpf(): string {
        return this._cpf;
    };

    // acessor: setter
    set cpf(newCpf: string) {
        if(newCpf.length !== 14) {
            throw new Error("CPF leagth is incorrect!")
        };
        this._cpf = newCpf;
    };
};

class Professor extends Pessoa {
    codigo: string;

    constructor(nome:string, idade: number, altura: number, cpf: string, codigo: string) {
        super(nome, idade, altura, cpf);
        this.codigo = codigo;
    };

    ensinar() {
        console.log("Ensinando...🧑‍🏫");
    };
};


// Criando/instanciando uma pessoa(individo/objeto) a partir da definicao da classe Pessoa

const pessoa1 = new Pessoa("Matheus", 22, 1.78, "137.983.644-19");
const pessoa2 = new Pessoa("Milena", 22, 1.68, "510.942.584-15");

console.log(pessoa1);
console.log(pessoa1.nome);
pessoa1.dormir();

console.log(pessoa2);
pessoa2.dormir();

pessoa1.nome = "Fulando";

console.log(pessoa1.nome);
console.log(pessoa1.cpf);

pessoa1.cpf = "123.456.789.10";
console.log(pessoa1.cpf);

// Objeto da Class Professor

const professor = new Professor("Professor", 30, 1.68, "123.456.789-10", "0001");
console.log(professor);

professor.dormir();
professor.ensinar();

// Polimorfismo
console.log(pessoa1 instanceof Pessoa); // true
console.log(pessoa1 instanceof Professor); // false
console.log(professor instanceof Pessoa); // true
console.log(professor instanceof Professor); // true