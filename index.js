// Remember to import the data and Dog class!
import Dog from "./Dog.js"
import dogs from "./data.js"

const dog = new Dog(dogs[1])

document.getElementById("dog").innerHTML = dog.getDogHtml()