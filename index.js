import Dog from "./Dog.js"
import dogs from "./data.js"

const dogArray = dogs.map((dog, i) => i)
let dog = getNewDog()

function getNewDog() {
   const dogsSwipedArray = dogs[dogArray.shift()]
   return dogsSwipedArray ? new Dog(dogsSwipedArray) : {}
}

function likeDog() {
    document.getElementById('rateLogo').innerHTML = `
    <img src="images/badge-like.png" alt="like badge" class="likeBadge">`
    setTimeout(() => swipeDog(), 1500)
    setTimeout(() => {
        document.getElementById('rateLogo').innerHTML = ``}, 1500)
}

function dislikeDog() {
    document.getElementById('rateLogo').innerHTML = `
    <img src="images/badge-nope.png" alt="dislike badge" class="dislikeBadge">`
    setTimeout(() => swipeDog(), 1500)
    setTimeout(() => {
        document.getElementById('rateLogo').innerHTML = ``}, 1500)
}

function swipeDog() {
    dog = getNewDog()
    render()
}

function render() {
    document.getElementById('dog').innerHTML = dog.getDogHtml()
}

document.getElementById("nope-btn").addEventListener('click', () => dislikeDog())
document.getElementById("yes-btn").addEventListener('click', () => likeDog())

render()

