const prompt = require("prompt-sync")();

let a,b,c,d,e, maiorValor, menorValor;

a = Number(prompt("Informe o valor: "));
maiorValor = a;
b = Number(prompt("Informe o valor: "));
if(b > maiorValor){
    maiorValor = b;
    menorValor = a;
}
else if(b < maiorValor){
    menorValor = b;
}

c = Number(prompt("Informe o valor: "));
if(c > maiorValor){
    maiorValor = c;
}
else if(c < menorValor){
    menorValor = c;
}

d = Number(prompt("Informe o valor: "));
if(d > maiorValor){
    maiorValor = d;
}
    else if(d < menorValor){
    menorValor = d;
}


e = Number(prompt("Informe o valor: "));
if(e > maiorValor){
    maiorValor = e;
}
else if(e < menorValor){
    menorValor = e;
}

console.log("O maior valor é: " + maiorValor);
console.log("O menorr valor é: " + menorValor);