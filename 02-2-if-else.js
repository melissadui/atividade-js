// crie um programa que armaze a idade de uma pessoa e informe se ela é maior de idade (18 anos ou mais) ou menor de idade.

const idade = Number(prompt(`Digite a sua idade:`));

if (idade >= 18) {
    console.log(`Você é maior de idade.`)
} else {
    console.log(`Você é menor de idade.`)
};