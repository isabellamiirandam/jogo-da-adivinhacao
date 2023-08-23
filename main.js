const randomNumber = Math.round(Math.random() * 10)

let xAttemps = 1

function handleclick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  xAttemps++

  console.log(xAttemps)
}
