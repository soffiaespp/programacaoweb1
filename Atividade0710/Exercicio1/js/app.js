let nomeAluno = prompt("Digite o nome do aluno")
console.log(nomeAluno)
let num1 = Number(prompt("Insira a 1° nota"))
let num2 = Number(prompt("Insira a 2° nota"))
let media = (num1 + num2)/2
console.log(media)

if (media >= 6) {
    alert("Parabéns, aprovado!")
}
else {
    alert("Reprovado!")
}