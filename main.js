/*A função Math.round() retorna o valor de um número arredondado para o inteiro mais proximo.*/
/*A função Math.random() retorna um número pseudo-aleatório*/

const randomNumber = Math.round(Math.random() * 10)

let xAttemps = 1

function handleTryClick(event) {
  /* não faça o padrão do evento (não enviar o formulário*/)
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")

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