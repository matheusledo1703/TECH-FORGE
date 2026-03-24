const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome.");
let sobrenome = prompt("Digite seu sobrenome.");
let idade = prompt("Digite sua idade.");
let anime = prompt("Digite seu anime preferido.");
let streaming = prompt("Digite a plataforma de streaming que você usa.")
console.log("Olá, " + nome + sobrenome + " vejo aqui que você tem " + idade + " anos " + " e gosta do anime " + anime + " e usa o streaming " + streaming + " para poder assisti-lo!")