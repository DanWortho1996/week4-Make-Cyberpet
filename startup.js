//Zahra's Code JS
const dogHouse = document.getElementById('dogHouse');
const dogInHouse = document.getElementById('dogInHouse');
 
dogHouse.addEventListener('click', () => {
    dogHouse.style.display = 'none';
    dogInHouse.style.display = 'block';
});
 
dogInHouse.addEventListener('click', () => {
    dogInHouse.style.display = 'none';
    dogHouse.style.display = 'block';
});
 
document.getElementById('dogButton').addEventListener('click', () => {
    document.getElementById('dogSound').play();
});

// Cat Functionality
const catHouse = document.getElementById('catHouse');
const catInHouse = document.getElementById('catInHouse');
 
catHouse.addEventListener('click', () => {
    catHouse.style.display = 'none';
    catInHouse.style.display = 'block';
});

catInHouse.addEventListener('click', () => {
    catHouse.style.display = 'none';
    catInHouse.style.display = 'block';
});

document.getElementById('catButton').addEventListener('click', () => {
    document.getElementById('catSound').play();
});
 
// Birdies Functionality
const birdHouse = document.getElementById('birdHouse');
const birdsInHouse = document.getElementById('birdsInHouse');
 
birdHouse.addEventListener('click', () => {
    birdHouse.style.display = 'none';
    birdsInHouse.style.display = 'block';
});
 
document.getElementById('birdButton').addEventListener('click', () => {
    document.getElementById('birdSound').play();
});
 
// Horsey Functionality
const horseHouse = document.getElementById('horseHouse');
const horseInHouse = document.getElementById('horseInHouse');
 
horseHouse.addEventListener('click', () => {
    horseHouse.style.display = 'none';
    horseInHouse.style.display = 'block';
});
 
document.getElementById('horseButton').addEventListener('click', () => {
    document.getElementById('horseSound').play();
});

//Danny's Code JS
class pet_container {
    constructor(name, health, hunger, happy, thirsty) {
        this.name = name;
        this.health = health;
        this.happy = happy;
        this.hunger = hunger;
        this.thirsty = thirsty;
    }
    health() {
        console.log(`Taking ${this.name} this ${this.health} for a walk.`)
        return this;
    }
    happy() {
        console.log(`${this.name} has had some food they are happy ${this.happy}`)
        return this;
    }
    hunger() {
        console.log(`Taking ${this.hunger}.`)
        return this;
    }
    thirsty() {
        console.log(`${this.thirsty} has had some food`)
        return this;
    }
}

const wendy = new animal ("Wendy");

animal();
animal.name();