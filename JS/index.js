//Pick random class and race from DnD 5e
//2 buttons that when pressed randomize your class/race in DnD
// const race = document.querySelector('.raceResult')
// const dndClass = document.querySelector('.classResult')
document.querySelector('#submitRace').addEventListener('click', pickARace)
document.querySelector('#submitClass').addEventListener('click', pickAClass)

const race = Array(
    document.querySelector('#dragonborn'),
    document.querySelector('#dwarf'),
    document.querySelector('#elf'),
    document.querySelector('#gnome'),
    document.querySelector('#halfElf'),
    document.querySelector('#halfling'),
    document.querySelector('#halfOrc'),
    document.querySelector('#human'),
    document.querySelector('#tiefling')
)

    

function pickARace() {

    
    let raceIndex = race.length - 1
    let randomIndex = [Math.floor(Math.random() * raceIndex)]

    document.querySelector('#dragonborn').style.display = 'none'
    document.querySelector('#dwarf').style.display = 'none'
    document.querySelector('#elf').style.display = 'none'
    document.querySelector('#gnome').style.display = 'none'
    document.querySelector('#halfElf').style.display = 'none'
    document.querySelector('#halfling').style.display = 'none'
    document.querySelector('#halfOrc').style.display = 'none'
    document.querySelector('#human').style.display = 'none'
    document.querySelector('#tiefling').style.display = 'none'        


    
    if (randomIndex == 0){
        console.log(race[0])
        document.querySelector('#dragonborn').style.display = 'block'
    } else if (randomIndex == 1){
        console.log(race[1])
        document.querySelector('#dwarf').style.display = 'block'
    } else if (randomIndex == 2){
        console.log(race[2])
        document.querySelector('#elf').style.display = 'block'
    } else if (randomIndex == 3){
        console.log(race[3])
        document.querySelector('#gnome').style.display = 'block'
    } else if (randomIndex == 4){
        console.log(race[4])
        document.querySelector('#halfElf').style.display = 'block'
    } else if (randomIndex == 5){
        console.log(race[5])
        document.querySelector('#halfling').style.display = 'block'
    } else if (randomIndex == 6){
        console.log(race[6])
        document.querySelector('#halfOrc').style.display = 'block'
    } else if (randomIndex == 7){
        console.log(race[7])
        document.querySelector('#human').style.display = 'block'
    } else {
        console.log(race[8])
        document.querySelector('#tiefling').style.display = 'block'        
    }
}

const dndClass = Array(
    document.querySelector('#barbarian'),
    document.querySelector('#bard'),
    document.querySelector('#cleric'),
    document.querySelector('#druid'),
    document.querySelector('#fighter'),
    document.querySelector('#monk'),
    document.querySelector('#paladin'),
    document.querySelector('#ranger'),
    document.querySelector('#sorcerer'),
    document.querySelector('#warlock'),
    document.querySelector('#wizard')
)


function pickAClass() {
    let classIndex = race.length - 1
    let randomIndex = [Math.floor(Math.random() * classIndex)]

    document.querySelector('#barbarian').style.display = 'none'
    document.querySelector('#bard').style.display = 'none'
    document.querySelector('#cleric').style.display = 'none'
    document.querySelector('#druid').style.display = 'none'
    document.querySelector('#fighter').style.display = 'none'
    document.querySelector('#monk').style.display = 'none'
    document.querySelector('#paladin').style.display = 'none'
    document.querySelector('#ranger').style.display = 'none'
    document.querySelector('#sorcerer').style.display = 'none'
    document.querySelector('#warlock').style.display = 'none'
    document.querySelector('#wizard').style.display = 'none'
       


    
    if (randomIndex == 0){
        console.log(dndClass[0])
        document.querySelector('#barbarian').style.display = 'block'
    } else if (randomIndex == 1){
        console.log(dndClass[1])
        document.querySelector('#bard').style.display = 'block'
    } else if (randomIndex == 2){
        console.log(dndClass[2])
        document.querySelector('#cleric').style.display = 'block'
    } else if (randomIndex == 3){
        console.log(dndClass[3])
        document.querySelector('#druid').style.display = 'block'
    } else if (randomIndex == 4){
        console.log(dndClass[4])
        document.querySelector('#fighter').style.display = 'block'
    } else if (randomIndex == 5){
        console.log(dndClass[5])
        document.querySelector('#monk').style.display = 'block'
    } else if (randomIndex == 6){
        console.log(dndClass[6])
        document.querySelector('#paladin').style.display = 'block'
    } else if (randomIndex == 7){
        console.log(dndClass[7])
        document.querySelector('#ranger').style.display = 'block'
    } else if (randomIndex == 8){
        console.log(dndClass[8])
        document.querySelector('#sorcerer').style.display = 'block'        
    } else if (randomIndex == 9){
        console.log(dndClass[9])
        document.querySelector('#warlock').style.display = 'block'        
    } else {
        console.log(dndClass[10])
        document.querySelector('#wizard').style.display = 'block'        
    }

}

