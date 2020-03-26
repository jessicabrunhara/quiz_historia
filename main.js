const name = prompt("Olá, jogador! Qual é o seu nome?");

const startTest = confirm("Deseja iniciar teste?");

if (!starTest) {
    alert("Você não iniciou o teste!");
    throw new Error("Encerrar o programa.");
}

const selectedTest = prompt("Qual teste você deseja iniciar? \n 1. História da Moda \n 2. História da Arte");

