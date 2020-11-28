//Select all items
const container = document.querySelector('.container')
const screen = document.querySelector('.screen')

const numbers = document.querySelectorAll('.numbers button')
const operations = document.querySelectorAll('.operations button')

const clearButton = document.querySelector('#clear-button')
const equalButton = document.querySelector('#equal-button')

numbers.forEach(number => {
    number.addEventListener('click', () => {
        screen.textContent += number.textContent //Add numbers to screen
    })
})
operations.forEach(operation => {
    operation.addEventListener('click', () => {
        screen.textContent += operation.textContent //Add operations to screen
        clear()
    })
})
clearButton.addEventListener('click', () => {
    clear()
})
equalButton.addEventListener('click', () => {

})
function clear() {
    screen.textContent = null
}