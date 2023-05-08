const board = document.querySelector('#board')
const colors =  ['#c51f1f', '#5244cf', '#d49b2f', '#1bdd82', '#2ecc71']
const SQUARES_NUMBER = 500

for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}


function setColor(element) {
    const color = getRandomColor()
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    element.style.backgroundColor = color
}

function  removeColor(element) {
    element.style.backgroundColor = '#2b2a2a'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)

    return colors[index]
}