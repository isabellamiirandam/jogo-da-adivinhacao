/*A função Math.round() retorna o valor de um número arredondado para o inteiro mais proximo.*/
/*A função Math.random() retorna um número pseudo-aleatório*/
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const randomNumber = Math.round(Math.random() * 10)

let xAttemps = 1

function handleTryClick(event) {
  /* não faça o padrão do evento (não enviar o formulário)*/
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    document
      .querySelector(".screen2 h2")
      .innerText = `Você acertou em ${xAttemps} tentativas`

  }

  xAttemps++


}

// Eventos

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

// Registrando os eventos 
// addEventListener ('nome do evento', 'nome da função que será reagida')
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function () {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
  xAttemps = 1
})