const randomNumber = Math.round(Math.random() * 10)

let xAttemps = 1

function handleclick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen1").classList.add('hide')
    document.querySelector(".sreen2").classList.remove('hide')

    document.querySelector(
      '.screen2 h2'
    ).innerText = `Você acertou em ${xAttemps} tentativas`

  }

  xAttemps++

  console.log(xAttemps)
}
