const buttonAumentar = document.querySelector("#aumentar-botao");
const buttonDiminuir = document.querySelector("#diminuir-botao");

const contadorElemento = document.querySelector("#contador");

const input = document.querySelector("#input");

buttonAumentar.addEventListener('click', (event) => {
    const valorAtual = Number(contadorElemento.textContent);

    contadorElemento.textContent = valorAtual + 1;

    buttonAumentar.classList.add("btn");
    buttonDiminuir.classList.remove("btn");
});

buttonDiminuir.addEventListener('click', (event) => {
    const valorAtual = Number(contadorElemento.textContent);

    contadorElemento.textContent = valorAtual - 1;
    buttonDiminuir.classList.add("btn");
    buttonAumentar.classList.remove("btn");
});

input.addEventListener('input', (event) => {
    console.log(input.value);
});

// Adicionando estilos inline no elemento contador

contadorElemento.style.color = "red";
contadorElemento.style.padding = "0 2rem";
contadorElemento.style.border = "1px solid #AAA";
contadorElemento.style.width = "150px";

// Manipular Classes

console.log(buttonDiminuir.classList);

const themeButton = document.querySelector("#theme");

let darkTheme;

//Definindo uma fucao que sera executada ao carregar o conteudo da janela!
window.onload = () => {
    const isDarkThemeStorage = localStorage.getItem('isDarkTheme');

    darkTheme = isDarkThemeStorage === 'true';

    //isDarkThemeStorage = "true" => true
    //isDarkThemeStorage = "flase" => false
    //isDarkThemeStorage = null => false

    const body =  document.querySelector('body');

    if (darkTheme) {
        body.style.background = "black";
        body.style.color = "white";
    } else {
        body.style.background = "white";
        body.style.color = "black";
    }
};

themeButton.addEventListener('click', () => {
    darkTheme = !darkTheme;

    localStorage.setItem('isDarkTheme', darkTheme);

    const body =  document.querySelector('body');

    if (darkTheme) {
        body.style.background = "black";
        body.style.color = "white";
    } else {
        body.style.background = "white";
        body.style.color = "black";
    }
})