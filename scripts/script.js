//Select all items
const container = document.querySelector('.container')
const screen = document.querySelector('.screen')
const numbers = document.querySelectorAll('.numbers')
const operations = document.querySelectorAll('.operations')

numbers.forEach(number => {
    addEventListener('click', () => {
        screen.textContent = number.textContent
    })
})