let btn1= document.querySelector("#btn1");
let btn2= document.querySelector("#btn2");
let copyCode= document.querySelector(".copyCode");
// let copyDiv= document.querySelector(".copyDiv");

let rgb1 = "#004773";
let rgb2= "#54d542";
const hexValues = () => {
    let myHexValues = "123456789abcdef";
    let hexColor = "#";
    
    for (let i = 0; i < 6; i++) {
        hexColor += myHexValues[Math.floor(Math.random() * myHexValues.length)];
    }
   
    return hexColor;

};

const handlebtn1 = () => {
    rgb1 = hexValues();
   console.log(rgb1);
   document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
   copyCode.innerHTML = `background-image: linear-gradient( to right, ${rgb1}, ${rgb2})`;
   btn1.innerText = rgb1;
};

const handlebtn2 = () => {
    rgb2 = hexValues();
   console.log(rgb2);
   document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
   copyCode.innerHTML = `background-image: linear-gradient( to right, ${rgb1}, ${rgb2})`;
   btn2.innerText = rgb2;
    
};

btn1.addEventListener("click", handlebtn1);
btn2.addEventListener("click", handlebtn2);


copyCode.addEventListener("click", () => {
    navigator.clipboard.writeText(copyCode.innerText)
        .then(() => {
            alert("background-image is copied to clipboard");
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
});


