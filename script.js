const inputInicio = document.querySelector("#inicio")
const inputFim = document.querySelector("#fim")
const inputPasso = document.querySelector("#passo")
const inputButton = document.querySelector("#btnEnviar")
const divResultado = document.querySelector("#div2")

//limpa os campos e foca no input inicio
function limparFocar() {
    inputInicio.value = ""
    inputFim.value = ""
    inputPasso.value = ""
    inputInicio.focus()
}

inputButton.addEventListener('click', () => {

    // Converte os valores dos inputs para número
    let i = Number(inputInicio.value)
    let f = Number(inputFim.value)
    let p = Number(inputPasso.value)

    // Verifica se algum campo está vazio antes de converter para número
    if (inputInicio.value.length == 0 || inputFim.value.length == 0 || inputPasso.value.length == 0) {
        alert("Insira valores em TODOS os campos!")
        limparFocar()
        return // Interrompe a execução se algum campo estiver vazio
    }

    // Passo zero causaria loop infinito
    if (p == 0) {
        alert("Impossivel percorrer!")
        limparFocar()
        return
    }

    // O passo não pode ser maior que a diferença entre início e fim,
    // senão o loop pularia direto para além do fim sem percorrer os valores
    if (i < f && p > (f - i)) {
        alert("Impossivel percorrer!")
        limparFocar()
        return
    }

    if (i > f && p > (i - f)) {
        alert("Impossivel percorrer!")
        limparFocar()
        return
    }

    // Limpa o resultado anterior antes de exibir o novo
    divResultado.innerHTML = ""

    // Contagem crescente: início menor que fim, soma o passo a cada iteração
    if (i < f) {
        for (let index = i; index <= f; index += p) {
            divResultado.innerHTML += index + " 👉 "
        }
        // Contagem decrescente: início maior que fim, subtrai o passo a cada iteração
    } else {
        for (let index = i; index >= f; index -= p) {
            divResultado.innerHTML += index + " 👉 "
        }
    }

    // Exibe o marcador de fim após o loop terminar
    divResultado.innerHTML += " FIM!"

    // Limpa os campos e volta o foco para o primeiro input
    limparFocar();
})