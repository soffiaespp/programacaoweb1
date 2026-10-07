let idade = Number(prompt("Digite sua idade"))

if (idade >= 18) {
    let escolha = Number(prompt("Digite o número do plano desejado: \n1 - Básico \n2 - Pro \n3 - VIP"))
    switch(escolha) {
        case 1:
            alert("O plano básico oferece acesso com restrições ao curso")
            break
        case 2:
            alert("O plano Pro oferece acesso sem restrições ao curso")
            break
        case 3:
            alert("O plano VIP oferece acesso sem restrições ao curso e horas complementares")
            break
        default:
            alert("A opção escolhida não é válida")
    }
} else {
    alert("Acesso bloqueado! Usuário menor de 18")
}