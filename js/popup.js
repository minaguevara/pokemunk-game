const closeInstructions = document.querySelector('#closeInstructions')
const instructionsBox = document.querySelector('.instructionsBox')

let closeInstructionsFunction = function () {
    instructionsBox.classList.add("instructionsBoxHidden")
}

closeInstructions.addEventListener('click', closeInstructionsFunction)
