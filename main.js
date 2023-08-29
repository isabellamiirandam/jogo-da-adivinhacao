// Variáveis 
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
/*A função Math.round() retorna o valor de um número arredondado para o inteiro mais proximo.
A função Math.random() retorna um número pseudo-aleatório*/
let randomNumber = Math.round(Math.random() * 10)
let xAttemps = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick
  }
})

//Funções callback
function handleTryClick(event) {

  event.preventDefault()   //não faça o padrão do evento (não enviar o formulário)

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    document
      .querySelector(".screen2 h2")
      .innerText = `Você acertou em ${xAttemps} tentativas`

  }

  inputNumber.value = ""
  xAttemps++
}

function handleResetClick() {
  toggleScreen()
  xAttemps = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
