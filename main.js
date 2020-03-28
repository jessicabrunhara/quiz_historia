const name = prompt("Olá, pessoa linda! Qual é o seu nome?");

const nameElement = document.getElementById("nome");
nameElement.innerHTML = name;

const startTest = prompt("Deseja iniciar a prova? \n 1- Sim \n 2- Não");


if(startTest ==2) {
    alert("Você não iniciou o teste.");
    throw new Error('Encerrar o programa');
}

// Se a execução do código chegou até esta linha, significa que o usuário quis começar o teste
const selectedTest = prompt("Qual prova você quer fazer? \n 1- História da moda \n 2- História da arte");


// Selecione as caixas de respostas corretas e incorretas
const correctAnswers = document.getElementById("respostas_corretas");
const incorrectAnswers = document.getElementById("respostas_incorretas");

// Prova de história da moda
if(selectedTest == 1) {
    // Início da Pergunta 1
    const firstAnswer = prompt("Qual é o primeiro nome da famosa estilista Coco Chanel? \n 1- Gabrielle \n 2- Renné \n 3- Sophie");

    const firstAnswerElement = document.createElement("div");
    firstAnswerElement.classList.add("resposta");
    firstAnswerElement.innerHTML = "resposta 1";

    if(firstAnswer == 1) {
        firstAnswerElement.classList.add("correta");
        correctAnswers.appendChild(firstAnswerElement);
    } else {
        firstAnswerElement.classList.add("incorreta");
        incorrectAnswers.appendChild(firstAnswerElement);
    }
 
        //FIM DA PERGUNTA 1


    //INÍCIO DA PERGUNTA 2

    const secondAnswer = prompt("Quem é conhecido como o pai da alta costura \n 1- Valentino \n 2- Charles Frederick Worth \n 3- Christian Dior");
    
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
//FIM DA PERGUNTA 2

//INÍCIO DA PERGUNTA 3
    const thirdAnswer = prompt("Em qual década Chanel popularizou o uso de calças por mulheres? \n 1- 20 \n 2- 30 \n 3- 50");
    
    const thirdAnswerElement = document.createElement("div");
    thirdAnswerElement.classList.add("resposta");
    thirdAnswerElement.innerHTML = "resposta 3";
    
    if(thirdAnswer == 1) {
        thirdAnswerElement.classList.add("correta");
        correctAnswers.appendChild(thirdAnswerElement);
    }  else  {
        thirdAnswerElement.classList.add("incorreta");
        incorrectAnswers.appendChild(thirdAnswerElement);
    }

    if(firstAnswer== '1' && secondAnswer== '2' && thirdAnswer== '1'){
        alert("Parabéns, você acertou todas!");
    }
}

    // Prova de história da arte
if(selectedTest == 2) {

    // Início da Pergunta 1
    const firstAnswer = prompt("Em qual cidade o pintor Candido Portinari nasceu? \n 1- Palmares Paulista \n 2- Brodowski \n 3- Ouro Preto");
    
    const firstAnswerElement = document.createElement("div");
    firstAnswerElement.classList.add("resposta");
    firstAnswerElement.innerHTML = "resposta 1";
    
    if(firstAnswer == 2) {
        firstAnswerElement.classList.add("correta");
        correctAnswers.appendChild(firstAnswerElement);
    } else {
        firstAnswerElement.classList.add("incorreta");
        incorrectAnswers.appendChild(firstAnswerElement);
    }
    //fim da Pergunta 1

    //início da Pergunta 2
     const secondAnswer = prompt("Escolha a opção que cita algumas obras da artista Tarsila do Amaral: \n 1- Samba, Mulher com Gatos, Candangos \n 2- O Lavrador de café, Menino com Pássaros, O Mestiço \n 3- Antropofagia, Operários, Carnaval em Madureira");
    
     const secondAnswerElement = document.createElement('div');
     secondAnswerElement.classList.add("resposta");
     secondAnswerElement.innerHTML = "resposta 2";

     if(secondAnswer == 3) {
        secondAnswerElement.classList.add("correta");
        correctAnswers.appendChild(secondAnswerElement);
     } else {
        secondAnswerElement.classList.add("incorreta");
        incorrectAnswers.appendChild(secondAnswerElement);
     } 
     //fim da Pergunta 2

     //início da Pergunta 3
     const thirdAnswer = prompt("Em que ano aconteceu a Semana de Arte Moderna, em São Paulo? \n 1- 1922 \n 2- 1931 \n 3- 1929");

     const thirdAnswerElement = document.createElement('div');
     thirdAnswerElement.classList.add("resposta");
     thirdAnswerElement.innerHTML = "resposta 3";

     if(thirdAnswer == 1) {
        thirdAnswerElement.classList.add("correta");
        correctAnswers.appendChild(thirdAnswerElement);
     } else { 
        thirdAnswerElement.classList.add("incorreta");
        incorrectAnswers.appendChild(thirdAnswerElement);
     }
     

    if(firstAnswer== '2' && secondAnswer== '3' && thirdAnswer== '1'){
        alert("Parabéns, você acertou todas!");
    }
     
}
