const name = prompt("Olá, jogador! Qual é o seu nome?");

const nameElement = document.getElementById("nome");
nameElement.innerHTML = name;


const startTest = confirm("Deseja iniciar teste?");

if (!startTest) {
    alert("Você não iniciou o teste!");
    throw new Error("Encerrar o programa.");
}

const selectedTest = prompt("Qual teste você deseja iniciar? \n 1. História da Moda \n 2. História da Arte");


//selecione as caixas de respostas corretas e incorretas
const correctAnswers = document.getElementById("respostas_corretas");
const incorretAnswers = document.getElementById("respostas_incorretas");

//história da moda

//INÍCIO DA PERGUNTA 1
if(selectedTest == 1) {
    const firstAnswer = prompt("Qual é o primeiro nome da famosa estilista Coco Chanel? \n 1- Gabrielle \n 2-Renné \n 3-Sophie.");
    
    const firstAnswerElement = document.createElement("div");
    firstAnswerElement.classList.add("resposta");
    firstAnswerElement.innerHTML = "resposta 1";
    
    if(firstAnswer == 1) {
        firstAnswerElement.classList.add("correta");
        correctAnswers.appendChild(firstAnswerElement);
    } else  {
        firstAnswerElement.classList.add("incorreta");
        incorrectAnswers.appendChild(firstAnswerElement);
    }
}

//FIM DA PERGUNTA 1


//INÍCIO DA PERGUNTA 2

if(selectedTest == 1) {
    const secondAnswer = prompt("Quem é conhecido como o pai da alta costura \n 1- Valentino \n 2- Charles Frederick Worth \n 3-Christian Dior");
    
    const secondAnswerElement = document.createElement("div");
    secondAnswerElement.classList.add("resposta");
    secondAnswerElement.innerHTML = "resposta 2";
    
    if(secondAnswer == 2) {
        secondAnswerElement.classList.add("correta");
        correctAnswers.appendChild(secondAnswerElement);
    } else  {
        secondAnswerElement.classList.add("incorreta");
        incorrectAnswers.appendChild(secondAnswerElement);
    }
}
//FIM DA PERGUNTA 2

//INÍCIO DA PERGUNTA 3

if(selectedTest == 1) {
    const thirdAnswer = prompt("Em qual década Chanel popularizou o uso de calças por mulheres? \n 1- 20 \n 2- 30 \n 3- 50");
    
    const thirdAnswerElement = document.createElement("div");
    thirdAnswerElement.classList.add("resposta");
    thirdAnswerElement.innerHTML = "resposta 2";
    
    if(thirdAnswer == 1) {
        thirdAnswerElement.classList.add("correta");
        correctAnswers.appendChild(thirdAnswerElement);
    } else  {
        thirdAnswerElement.classList.add("incorreta");
        incorrectAnswers.appendChild(thirdAnswerElement);
    }
}


