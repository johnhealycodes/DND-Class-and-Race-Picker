//Pick random class and race from DnD 5e
//2 buttons that when pressed randomize your class/race in DnD
const race = document.querySelector('.raceResult')
const dndClass = document.querySelector('.classResult')
document.querySelector('#submitRace').addEventListener('click', pickARace)
document.querySelector('#submitClass').addEventListener('click', pickAClass)

function pickARace() {
    // $(document).ready(function() {
    //     var rand = Math.floor(Math.random()*3)
    //     var visibleDiv = $('.raceResult')[rand]
    //     $(visibleDiv).show()
    // })
}

pickARace()


function pickAClass() {
    console.log(`click`)
}

pickAClass()