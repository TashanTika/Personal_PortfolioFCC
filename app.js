const texts = ["Web Developer", "My code DOESN’T work, I have no idea why. My code WORKS, I have no idea why."];
let count = 0; 
let index = 0; 
let currentText = ' ';
let letter = ' ';

//if me function
(function type() {

if (count === texts.length) {
    count = 0; 
}
currentText = texts[count];
letter = currentText.slice(0, ++index);

document.querySelector('.typing').textContent = letter;
if (letter.length === currentText.length) {
    count++;
    index = 0;
}

setTimeout(type, 200);

}());