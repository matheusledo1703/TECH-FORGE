const prompt = require ("prompt-sync")();

console.log("Informe dois valores diferentes nos próximos campos");
let numero1 = Number (prompt ("Informe o primeiro número a ser comparado!"));
let numero2 = Number (prompt ("Informe o segundo número a ser comparado!"));

if (numero1 > numero2) {
    console.log("O maior valor é:"+numero1);
}
    else if (numero1 < numero2) {
        console.log ("O maior valor é:"+numero2);
    }
        else{
            console.log ("Os valores"+numero1+"e"+numero2+"são iguais");
        }
