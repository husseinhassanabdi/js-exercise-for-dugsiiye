
const header = document.querySelector('#header');
console.log(header);

const bio = document.querySelectorAll('.bio');
console.log(bio);


function changeContent() {
    header.textContent = "My name is not hussein i leid to you";

    // console.log("changeContent function is called");
}

function changeElement() {
   bio[0].innerHTML = ' Welcome to my website, <strong>I have so much passion about ai and i love coding.</strong>';
}