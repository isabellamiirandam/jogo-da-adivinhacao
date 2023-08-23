const randomNumber = Math.round(Math.random() * 10)

function handleclick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  console.log(inputNumber.value)
}
