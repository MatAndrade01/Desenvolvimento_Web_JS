"use strict";
let numero = 20;
const pi = 3.1415;
let nome = "Matheus";
let correta;
let resultado = numero * pi;
//number[] or Array<number>
const numeros = [1, 2, 3, 4];
const nomes = ["Matheus", "Milena", "Lucas"];
//!const misto: (number | string)[] = ["Matheus", 22, 1.78]; Não recomendado
const idades = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);
const menorDeIdade = idades.filter((idade) => idade < 18);
console.log(menorDeIdade);
const pessoaTupla = ["Matheus", 22];
;
//type
// type Person = {
//     nome: string;
//     idade: number;
//     altura: number;
//     profissao?: string;
// }
const pessoa = {
    nome: "Matheus",
    idade: 22,
    profissao: "Desenvolvedor",
    altura: 1.78
};
const pessoa2 = {
    nome: "Milena",
    idade: 22,
    profissao: "Tecnica de Enfermagem",
    altura: 1.68
};
console.log(pessoa);
function chooseNumber(numero1, numero2, criterio) {
    switch (criterio) {
        case "greater":
            return numero1 > numero2 ? numero1 : numero2;
            break;
        case "lowen":
            return numero1 < numero2 ? numero1 : numero2;
            break;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5)
                return numero1;
            return numero2;
    }
    ;
}
;
const numeroEscolhido = chooseNumber(10, 20, "greater");
console.log("numeroEscolhido", numeroEscolhido);
function somar(numero1, numero2) {
    return numero1 + numero2;
}
;
console.log(somar(5, 10));
