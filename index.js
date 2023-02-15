import Dog from "./Dog.js"
import dogs from "./data.js"

const dogArray = dogs.map((dog, i) => i)
let dog = getNewDog()
let isWaiting = false;

function getNewDog() {
   const dogsSwipedArray = dogs[dogArray.shift()]
   return dogsSwipedArray ? new Dog(dogsSwipedArray) : {}
}

function likeDog() {
    dog.hasBeenLiked = true;
    setRatingBadge();
}

function setRatingBadge() {   
    if (!isWaiting) {
        isWaiting = true; 

        dog.hasBeenLiked == true ? 
        document.getElementById('rateLogo').innerHTML = `<img src="images/badge-like.png" alt="like badge" class="likeBadge">`:
        document.getElementById('rateLogo').innerHTML = `<img src="images/badge-nope.png" alt="dislike badge" class="dislikeBadge">`

        setTimeout(() => {
            document.getElementById('rateLogo').innerHTML = ``
            isWaiting = false}, 1500)
        
            dogArray.length !== 0 ? setTimeout(() => swipeDog(), 1500) :
            setTimeout(() => {document.getElementById('dog').innerHTML = `<p class="endMessage">You swiped all the dogs!</p>`}, 1500)
    }
}

function swipeDog() {
    dog = getNewDog()
    render()
}

function render() {
    document.getElementById('dog').innerHTML = dog.getDogHtml()
}

document.getElementById("nope-btn").addEventListener('click', () => setRatingBadge())
document.getElementById("yes-btn").addEventListener('click', () => likeDog())

render()

