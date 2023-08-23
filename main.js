const randomNumber = Math.round(Math.random() * 10)

let xAttemps = 1

function handleclick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber) == randomNumber) {
    document.querySelector(".screen1").classList.add('hide')
    document.querySelector(".sreen2").classList.remove('hide')
  }

  xAttemps++

  console.log(xAttemps)
}
