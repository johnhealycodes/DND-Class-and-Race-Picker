//Pick random class and race from DnD 5e

document.querySelector('#submit').addEventListener('click', randomize)

function randomize() {
    const race = Array.from(document.querySelector('.race'), (img))
    let currentIndex = race.length;

    Math.random(currentIndex)

    return currentIndex
}