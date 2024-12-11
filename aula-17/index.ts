let numero = 20;

const pi = 3.1415;

let nome: string = "Matheus";

let correta: boolean;

let resultado = numero * pi;

//number[] or Array<number>
const numeros: number[] = [1, 2, 3, 4];

const nomes: string[] = ["Matheus", "Milena", "Lucas"];

//!const misto: (number | string)[] = ["Matheus", 22, 1.78]; Não recomendado

const idades: number[] = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);

const menorDeIdade = idades.filter((idade) => idade < 18);

console.log(menorDeIdade);

const pessoaTupla:[string, number] = ["Matheus", 22];

// Object Types

// interface

interface Person {
    nome: string;
    idade: number;
    profissao?: string;
    altura: number;
};

//type

// type Person = {
    //     nome: string;
    //     idade: number;
    //     altura: number;
    //     profissao?: string;
    // }
    
    const pessoa: Person = {
        nome: "Matheus",
        idade: 22,
        profissao: "Desenvolvedor",
        altura: 1.78
};

const pessoa2: Person = {
    nome: "Milena",
    idade: 22,
    profissao: "Tecnica de Enfermagem",
    altura: 1.68
};

console.log(pessoa)

// Type aliases
type Criterio = 'greater' | 'lowen'

function chooseNumber(
    numero1: number, 
    numero2: number, 
    criterio?: Criterio
): number {
    switch(criterio){
        case "greater":
            return numero1 > numero2 ? numero1 : numero2;
            break;
        case "lowen":
            return numero1 < numero2 ? numero1 : numero2;
            break;
        default:
            const numeroAleatorio = Math.random();

            if (numeroAleatorio >= 0.5) return numero1;
            return numero2;
    };
};

const numeroEscolhido = chooseNumber(10, 20, "greater");

console.log("numeroEscolhido", numeroEscolhido);

function somar(numero1: number, numero2:  number): number {
    return numero1 + numero2;
};

console.log(somar(5,10));