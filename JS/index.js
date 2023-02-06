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


function pickAClass() {
    // console.log(`click`)
}

pickARace()

pickAClass()