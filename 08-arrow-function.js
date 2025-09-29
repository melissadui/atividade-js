// arrow function chamada ehPar que receba um número e retone true se for par, e false se for ímpar.

let numero = 21;

const ehPar = (numero) => {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

// console.log(ehPar)
// console.log(ehPar(numero));
console.log(`O número ${numero} ser par é uma afirmativa ${ehPar(numero)}.`);