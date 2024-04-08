// PROBLEM 1
// Make two objects named Artist
// and Painter. Artist should have
// a function named speak() that
// when called logs "I am an artist"
// to the console. Painter should be
// able to use the Artist's speak function
// (painters are artists, after all) in some
// way, and should also have a function named
// paint() that sets the background color of the
// page to a random color whenever called.

const Artist  = {
    speak: function(){
        console.log("I am an artist")
    }
}
const Painter = {
    speak: Artist.speak(), //calling the speak function in Artist
    paint: function (){
        let body = document.querySelector("body");
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        body.style.backgroundColor = "#"+randomColor; //setting background a random color
    }
}
// Comparisons
// Others used class approach and constructors or the object approach, which is similar to mine
//source - https://css-tricks.com/snippets/javascript/random-hex-color/

// PROBLEM 2
// create a for loop that creates 20 blocks,
// all on a single row, with a random color for each
// make sure the values for each color channel are different
// (i.e. no gray/black/white blocks)
window.addEventListener("DOMContentLoaded", () => {
    const blockContainer = document.getElementById("block-container");

    for (let i = 0; i < 20; i++) {
        const block = document.createElement("div"); //to create a block
        let randomColor = 'hsl(' + Math.round(Math.random() * 359) + ',100%,50%)';

        block.style.backgroundColor =  randomColor; //setting random background color for the block

        block.style.width = "50px";
        block.style.height = "50px";
        block.style.display = "inline-block"; //to ensure in same row
        block.style.marginTop = "20px";
        block.style.marginBottom = "20px";

        blockContainer.appendChild(block); //adding every block to the parent div

    }
});
// Comparison
// Similar approach of creating div element and appending that to the body. Used a different logic to generate random colors, by ensuring RGB colors are not equal.
//source - https://stackoverflow.com/questions/44790001/restrict-random-color-generator-function-to-generate-specific-color-in-javascrip

// PROBLEM 3
// create a for input field that does the following
// whenever the user enters a letter in it:
// 1. Creates a <h1> element containing the letter and appends it to the page
// 2. deletes the inputted letter from the input field so it is blank
window.addEventListener("DOMContentLoaded", () => {
    let inputEntry = document.getElementById("letter"); //input field
    let body = document.querySelector("body");
    const heading = document.createElement("h1"); //creating <h1>
    heading.innerHTML = ""; //to delete h1
    inputEntry.addEventListener("input", () => {
        let entry = inputEntry.value;
        heading.innerHTML = entry; //when letter typed, placing into h1
        body.appendChild(heading); //pasting h1 into body
    });
})
// Comparison
// Used similar approach, but different functions to add value to the h1 tag like used textContent

// PROBLEM 4
// make a button that, when clicked, creates a new
// button, and then deletes the original button.
// every button that is created should have this same behavior.
// put random text inside of each button so you can be sure
// that each button is different.
window.addEventListener("DOMContentLoaded", () => {
    function replaceButton(){
        const createButton = document.createElement("button"); //creating button
        const randomText = generateString(5); //generating random text of 5 characters
        createButton.innerHTML = randomText;
        createButton.addEventListener("click",  ()=> {
            replaceButton() //when button clicked calling the function again create another button and remove existing
            createButton.remove()
        })
        document.body.appendChild(createButton); //pasting button into body
    }
    replaceButton() //function call

    function generateString(count) {
        let result = ' ';
        let characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < count; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
})
// Comparison
// Similar approach mostly but again used different functions like removeChild to delete button, and directly setting the innerHTML value to the button instead of appending the child. THe logic for randomg string generation is different. 
//source - https://www.programiz.com/javascript/examples/generate-random-strings