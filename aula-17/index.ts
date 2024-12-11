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

// Utility Types: A ideia desle é permitir que voce crie novos tipos a partir de tipos já existentes

// 1. Partial

type PersonPatial = Partial<Person>; //Deixa opicional

// 2. Required

type PersonRequired = Required<Person>; //Deixa Obrigatorio

// 3. Pick

type PersonPicked = Pick<Person, 'nome' | 'idade'>;

// 4. Omit

type PersonOmit = Omit<Person, 'profissao'>;

// 5. Exclude

type CriterioExclude = Exclude<Criterio, 'greater'>;

// 6. Record

type Pessoas = Record<string, Person>;

const pessoas: Pessoas = {
    "123.456.789-00": {
        nome: "Fulano",
        idade: 20,
        altura: 1.80,
    },
    "123.456.789-01": {
        nome: "Fulana",
        idade: 19,
        altura: 1.60,
    }
};