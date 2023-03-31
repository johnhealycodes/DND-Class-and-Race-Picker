//Pick random class and race from DnD 5e
document.querySelector('#start').addEventListener('click', adventureStart)


function adventureStart() {

    let randomRace = [Math.floor(Math.random() * 8)]

    
    if (randomRace == 0){
        document.querySelector('.raceImage').src = 'CSS/images/Races/Dragonborn.png'
        document.querySelector('#raceName').innerText = 'Dragonborn'
    } else if (randomRace == 1){
        document.querySelector('.raceImage').src = 'CSS/images/Races/Dwarf.png'
        document.querySelector('#raceName').innerText = 'Dwarf'
    } else if (randomRace == 2){
        document.querySelector('.raceImage').src = 'CSS/images/Races/Elf.png'
        document.querySelector('#raceName').innerText = 'Elf'
    } else if (randomRace == 3){
        document.querySelector('.raceImage').src = 'CSS/images/Races/Gnome.png'
        document.querySelector('#raceName').innerText = 'Gnome'
    } else if (randomRace == 4){
        document.querySelector('.raceImage').src = 'CSS/images/Races/HalfElf.png'
        document.querySelector('#raceName').innerText = 'Half Elf'
    } else if (randomRace == 5){
        document.querySelector('.raceImage').src = 'CSS/images/Races/Halfling.png'
        document.querySelector('#raceName').innerText = 'Halfling'
    } else if (randomRace == 6){
        document.querySelector('.raceImage').src = 'CSS/images/Races/HalfOrc.png'
        document.querySelector('#raceName').innerText = 'Half Orc'
    } else if (randomRace == 7){
        document.querySelector('.raceImage').src = 'CSS/images/Races/Human.png'
        document.querySelector('#raceName').innerText = 'Human'
    } else {
        document.querySelector('.raceImage').src = 'CSS/images/Races/Tiefling.png'   
        document.querySelector('#raceName').innerText = 'Tiefling'     
    }

        
    let randomIndex = [Math.floor(Math.random() * 11)]


    
    if (randomIndex == 0){
        document.querySelector('.dndClass').src = "CSS/images/Classes/barbarian.jpeg"
        document.querySelector('#className').innerText = 'Barbarian'
    } else if (randomIndex == 1){
        document.querySelector('.dndClass').src = "CSS/images/Classes/Bard.jpg"
        document.querySelector('#className').innerText = 'Bard'
    } else if (randomIndex == 2){
        document.querySelector('.dndClass').src = "CSS/images/Classes/Cleric.jpg"
        document.querySelector('#className').innerText = 'Cleric'
    } else if (randomIndex == 3){
        document.querySelector('.dndClass').src = "CSS/images/Classes/Druid.jpg"
        document.querySelector('#className').innerText = 'Druid'
    } else if (randomIndex == 4){
        document.querySelector('.dndClass').src = "CSS/images/Classes/Fighter.jpg"
        document.querySelector('#className').innerText = 'Fighter'
    } else if (randomIndex == 5){
        document.querySelector('.dndClass').src = "CSS/images/Classes/Monk.jpg"
        document.querySelector('#className').innerText = 'Monk'
    } else if (randomIndex == 6){
        document.querySelector('.dndClass').src = "CSS/images/Classes/Paladin.jpg"
        document.querySelector('#className').innerText = 'Paladin'
    } else if (randomIndex == 7){
        document.querySelector('.dndClass').src = "CSS/images/Classes/Ranger.jpg"
        document.querySelector('#className').innerText = 'Ranger'
    } else if (randomIndex == 8){
        document.querySelector('.dndClass').src = "CSS/images/Classes/Sorcerer.jpg"   
        document.querySelector('#className').innerText = 'Sorcerer'     
    } else if (randomIndex == 9){
        document.querySelector('.dndClass').src = "CSS/images/Classes/Rogue.jpg"  
        document.querySelector('#className').innerText = 'Rogue'      
    } else if (randomIndex == 10){
        document.querySelector('.dndClass').src = "CSS/images/Classes/Warlock.jpg"  
        document.querySelector('#className').innerText = 'Warlock'
    } else {
        document.querySelector('.dndClass').src = "CSS/images/Classes/Wizard.jpg"  
        document.querySelector('#className').innerText = 'Wizard'      
    }

}
