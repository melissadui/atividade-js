// sistema de login que aceita somente a senha "1234", usando do...while.

// const senha = Number(prompt(`Digite a senha correta:`));

let senha;

do {
    senha = prompt(`Digite a senha correta:`)
    console.log(senha);
} while (senha !== "1234")



// do {
//     senha = prompt(`Digite a senha correta:`);
//     if (senha !== "1234") {
//         console.log(`Senha incorreta. Tente de novo.`);
//     }
// } while (senha !== "1234");
// console.log(`Senha correta, parabéns!`)
