/*
    1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
    2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
    3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
        
        💡 Para saber o tipo de dado você pode usar o operador `typeof`
        
    4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
    5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
    6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
    7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
    8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
    9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
    10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

*/

console.log('Hello World')

let numberOne = 35
let numberTwo = 34

let valor = true

console.log(Number(numberOne) + Number(numberTwo))

console.log(typeof numberOne)



if (typeof numberOne === 'string') {
    console.log("É um stringer")

}else {
    console.log("Não é uma stringer!")
}

if (typeof numberOne === 'number') {
    console.log("É um numero")

}else {
    console.log("Não é um numero!")
}

if (typeof valor === 'boolean') {
    console.log("É um boolean")

}else {
    console.log("Não é um boolen!")
}

console.log(numberOne - numberTwo)

console.log(numberOne * numberTwo)

console.log(numberOne / numberTwo)

console.log(numberOne % 2 == 0 ? 'É um numero Par' : 'É um numero Impar')

console.log(numberTwo % 2 == 0 ? 'É um numero Par' : 'É um numero Impar')