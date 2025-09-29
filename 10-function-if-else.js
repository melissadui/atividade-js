// função chamada ehPrimo que receba números e retorne true se ele for primo ou false caso contrário.

// let numero = 2;

// const ehPrimo = (numero) => {
//     for (let i = 2; i < numero; i++) {
//         if (numero % i === numero) {
//             return false;
//         } else {
//             return true;
//         }
//     }
// };

// console.log(`O número ${numero} ser primo é ${ehPrimo(numero)}.`);

let numero = 5;

const ehPrimo = (numero) => {
    if (numero <= 1) {
        return false; // nem 0 nem 1 é primo
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false; // encontrou um divisor, não pode ser primo
        }
    }
    return true; // sem divisor, é primo
};

console.log(`O número ${numero} ser primo é ${ehPrimo(numero)}.`);
