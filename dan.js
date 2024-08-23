// class animal {
//     constructor(name, health, hunger, happy, thirsty) {
//         this.name = name;
//         this.health = health;
//         this.happy = happy;
//         this.hunger = hunger;
//         this.thirsty = thirsty;
//     }
//     health() {
//         console.log(`Taking ${this.name} this ${this.health} for a walk.`)
//         return this;
//     }
//     happy() {
//         console.log(`${this.name} has had some food they are happy ${this.happy}`)
//         return this;
//     }
//     hunger() {
//         console.log(`Taking ${this.hunger}.`)
//         return this;
//     }
//     thirsty() {
//         console.log(`${this.thirsty} has had some food`)
//         return this;
//     }
// }

// const wendy = new animal ("Wendy");

// animal();
// animal.name();

document.getElementById('button1').addEventListener('click', () => {
    let audio = document.getElementById('dogBark');
    audio.play();
});

document.getElementById(`box1`).addEventListener(`click`, () => {
    const dog = document.getElementById(`dog1`)
    dog.style.display = `block`
    dog.style.display = `none`
});

document.getElementById('button2').addEventListener('click', () => {
    let audio = document.getElementById('catBark');
    audio.play();
});

document.getElementById('button3').addEventListener('click', () => {
    let audio = document.getElementById('birdBark');
    audio.play();
});

document.getElementById('button4').addEventListener('click', () => {
    let audio = document.getElementById('horseBark');
    audio.play();
});


document.getElementById('box').addEventListener('click', () => {
    const cat = document.getElementById('cat');
    cat.style.display = 'block'; });  
//Placeholder functions for feed and play buttons
document.getElementById('feed').addEventListener('click', () => {
    console.log('Feeding the cat...')});
//Add code to update pet's hunger or other properties });  
document.getElementById('play').addEventListener('click', () => {
    console.log('Playing with the cat...')});
    // Add code to update pet's happiness or other properties });


// const selectAnimal = (animal) => {
//     switch(animal){
//         case `Dog`:
//             currentAnimal = new dog()
//             break;
//          case `Cat`:
//             currentAnimal = new Cat()
//             break;
//         case `Birds`:
//             currentAnimal = new bird()
//             break;
//         case `Horse`:
//             currentAnimal = new horse()
//         }
//     }

//     document.getElementById(`animalName`).innerText = currentAnimal.name
//     document.getElementById(`select`)