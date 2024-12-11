// Selecionar elementos HTML da nossa página utilizando o document

// 1. Pelo nome da Tag
const todosP = document.getElementsByTagName("p");
console.log(todosP);

// 2. Pelo nome da Classe
const todosClasseParagrafo = document.getElementsByClassName("paragrafo");
console.log(todosClasseParagrafo);

// 3. Pegar pelo name da tag
const emailInput = document.getElementsByName("email");
console.log(emailInput);

// 4. Pelo id da tag
const imgJsLogo = document.getElementById("js-logo");
console.log(imgJsLogo);

// 5. Query Selector
const imagem = document.querySelector("body > img#js-logo");
console.log(imagem);

const paragrafos = document.querySelectorAll("p");;
console.log(paragrafos);

console.clear();

// Acessando/Alterando o conteudo HTML das tags

const primieroParagrafo = document.querySelector("p.paragrafo");
console.log(primieroParagrafo);

console.log("textContent:", primieroParagrafo.textContent);
console.log("innerHTML:", primieroParagrafo.innerHTML);

primieroParagrafo.innerHTML = "<strong>Outra coisa</strong>";

console.clear();

emailInput[0].value = "matheus@email.com";

// Criando elementos na pagina HTML

const listaUl = document.querySelector("ul#lista");
const listali = document.querySelectorAll("ul > li");

const novaTagLi = document.createElement("li");//criando nova tag li
novaTagLi.textContent = "Segundo Item"; //adicionando um texto a tag li

console.log(novaTagLi);

// listaUl.appendChild(novaTagLi);

listaUl.insertBefore(novaTagLi, listali[1]);

listaUl.removeChild(novaTagLi);