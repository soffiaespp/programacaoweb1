let escolha = Number(prompt("Escolha entre: \n1 - Combo Bug (Hambúrguer + Refri)  \n2 - Combo Deploy (Pizza + Suco)  \n3 -Combo Sênior (Salada + Água)"))
switch(escolha){
    case 1:
        alert(`Você escolheu 1 - Combo Bug (Hambúrguer + Refri) - R$29,90.`)
        break
    case 2:
        alert(`Você escolheu 2 - Combo Deploy (Pizza + Suco) - R$39,90.`)
        break
    case 3:
        alert(`Você escolheu 3 - Combo Sênior (Salada + Água) - R$9,90.`)
        break
    default:
        alert("Erro! Escolha inválida")
}