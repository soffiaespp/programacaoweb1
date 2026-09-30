/*
A diferença do While e Do While
1 - While 
    1.1 - verifica a condição antes de entrar no loop
    1.2 - tem um contador e variável de escape no loop
2 - Do While 
    2.1 - primeiro executa o loop, depois testa
    2.2 - usado quando se precisa executar o loop 
    pelo menos uma vez
    2.3 - escapa do loop apenas se a variavel atender a condição
*/

/*While
let num1 = 0
while(num1 <= 5){
    console.log(`${(num1 + 1)}° rodada`)
    num1++
}
*/

//exemplo 2 - tabuada
let num1 = 0
let numfixo = Number(prompt("Digite o número da tabuada desejada"))
while(num1 <= 10){
    console.log(`${numfixo} x ${num1} = ${(numfixo * num1)}\n`)
    num1++
}