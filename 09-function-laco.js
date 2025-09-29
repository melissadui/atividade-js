// função somarAte que receba um número e retorne a soma de todos os números de 1 até esse número.

// function somar(a, b) {
//     let soma = a + b;
//     console.log(`A soma de ${a} e ${b} é ${soma}`);
// }
// somar(20, 5);


// for (let i = 1; i <= 10; i++) {
//   console.log(`${numero} x ${i} é ${numero * i}`);
// };

const numero = 5;

function somarAte(numero) {
    let soma = 0;
    for (let i = 1; i <= numero; i++) {
        soma += i;
    }
    return soma;
};

console.log(somarAte(numero));