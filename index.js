const blueButton = document.querySelector('.buttonleft');
const redButton = document.querySelector('.buttonright');
const title = document.querySelector('.title');

function changeVisibilityTitle() {
    title.classList.toggle('title-invisible');
}

let data = true;
blueButton.onclick = function checkClickButton() {
    if (data == true) {
        data = false;
    } 
}

redButton.onclick = function checkClickButton() {
    if (data == false) {
        changeVisibilityTitle();
        data = true; 
    }
}