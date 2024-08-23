document.addEventListener('DOMContentLoaded', () => {
    // Add typing effect to the title
    const title = document.getElementById('title');
    title.innerHTML = title.textContent.split('').map((char, i) =>
        `<span style="animation-delay: ${i * 0.1}s">${char}</span>`
    ).join('');
    
    // Handle image selection and switching to the second page
    document.querySelectorAll('.pet-selection img').forEach(img => {
        img.addEventListener('click', function() {
            // Remove 'selected' class from all images
            document.querySelectorAll('.pet-selection img').forEach(img => img.classList.remove('selected'));
            // Add 'selected' class to the clicked image
            this.classList.add('selected');
            
            // Play the associated pet sound
            const petSound = document.getElementById(`${this.id}-sound`);
            if (petSound) {
                petSound.play();
                setTimeout(() => {
                    petSound.pause();
                    petSound.currentTime = 0;
                }, 2000);
            }
        });
    });
      
 
    // Handle "Make Pet" button click
    document.getElementById('make-pet').addEventListener('click', function() {
        const selectedPet = document.querySelector('.pet-selection img.selected');
        const petName = document.getElementById('pet-name').value;
        
        if (selectedPet && petName) {
            document.getElementById('page1').style.display = 'none';
            document.getElementById('page2').style.display = 'block';
    
            // Display selected pet name and image
            document.getElementById('pet-name-display').textContent = petName;
            document.getElementById('pet-image').src = selectedPet.src;
    
            // Starting stats
            document.getElementById('health').value = 100;
            document.getElementById('happy').value = 100;
            document.getElementById('thirsty').value = 100;
            document.getElementById('hunger').value = 100;
    

            setInterval(() => {
                decreaseStat(`health`, -11);
                decreaseStat(`happy`, -9);
                decreaseStat(`hunger`, -14);
                decreaseStat(`thirsty`, -17);
                checkPetStatus(health, happy, hunger, thirsty);
            }, 1000);

            // Add event listeners for actions
            document.getElementById('eat').addEventListener('click', function() {
                changeStat('hunger', 10);
            });
    
            document.getElementById('drink').addEventListener('click', function() {
                changeStat('thirsty', 10);
            });
    
            document.getElementById('walk').addEventListener('click', function() {
                changeStat('health', 10);
            });
    
            document.getElementById('play').addEventListener('click', function() {
                changeStat('happy', 10);
            });
        } else {
            alert('Please select a pet and enter a name.');
        }
    });
});
 
// Function to change the stat values
function changeStat(statId, change) {
    const stat = document.getElementById(statId);
    let currentValue = parseInt(stat.value,10);
    currentValue += change;
    if (currentValue > 100) currentValue = 100;
    if (currentValue < 0) currentValue = 0;
    stat.value = currentValue;
}

//Kris, Ian found how to decrease health
function decreaseStat(statId, change) {
    const stat = document.getElementById(statId);
    let currentValue = parseInt(stat.value,10);
    currentValue += change;
    if (currentValue > 100) currentValue = 100;
    if (currentValue < 0) currentValue = 0;
    stat.value = currentValue;
}

function checkPetStatus() {
    const health = parseInt(document.getElementById('health').value, 10);
    const happy = parseInt(document.getElementById('happy').value, 10);
    const thirsty = parseInt(document.getElementById('thirsty').value, 10);
    const hunger = parseInt(document.getElementById('hunger').value, 10);
    
    if (health <= 0, happy <= 0, thirsty <= 0, hunger <= 0) {
        alert('Your pet has become inactive.');
        // Return to the first page
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page1').style.display = 'block';
        
        // Reset inputs and selections
        document.querySelectorAll('.pet-selection img').forEach(img => img.classList.remove('selected'));
        document.getElementById('pet-name').value = '';
        document.getElementById('health').value = 100;
        document.getElementById('happy').value = 100;
        document.getElementById('thirsty').value = 50;
        document.getElementById('hunger').value = 50;
    }
}

// let health = 100;
// let happy = 100;
// let thirsty = 100;
// let play = 100;
// //if-else statement by Danny working on game over box.
// function decreaseHealth(amount) {
//     health -= amount;
// if (health <= 0, happy <= 0, thirsty <= 0, hunger <= 0) {
//     health = 0;
//     console.log("Game Over, your pet was not `Healthy`.")
//           }else if (happy <= 0){
//             happy = 0;
//             console.log("Game Over, your pet was inactive because of `Happiness`.")
//           }else if(thirsty <= 0){
//             thirsty = 0;
//             console.log("your pet was inactive because they was `Drink`.")
//           }else if (hunger <= 0){
//             play = 0;
//             console.log("your pet was inactive because they didn't `Eat`.")
//           }else{
//             console.log("Inactivity")
//           }
//         }



//Danny found this and Kris, Ian working on health bar
// decreaseStats = () => {
//     this.energy = Math.max(0, this.energy - 1);
//     this.happiness = Math.max(0, this.happiness - 3);
//     this.comfort = Math.max(0, this.comfort - 2);
// }