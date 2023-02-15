class Dog{
    constructor(data){
        Object.assign(this, data)
    }

    getDogHtml() {
        const {name, avatar, age, bio} = this
        return `
        <img class="dog-img" src="${avatar}" alt="picture of a dog"/>
            <div class="dog-div">
                <h1>${name}, ${age}</h1>
                <p>${bio}</p>
            </div>
        `
    }
}

export default Dog