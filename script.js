// COtação de moedas do dia.
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Obtendo os elementos do formulário.
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const form = document.querySelector("form")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")


// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
    
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")

})

// Capturando o evento de submit (enviar) do formulário.
form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "¢")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break                
    }
}

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = R$ ${price}`

        // Aplica a classe que exibe o footer para mostrar o resultado.
        footer.classList.add("show-result")
    } catch (error) {
        console.log(error)
        // Remove a classe que mostra o footer na tela.
        footer.classList.remove("show-result")
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }
}