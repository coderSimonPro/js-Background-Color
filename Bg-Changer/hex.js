const hexElement = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const selectBtn = document.getElementById('myBtn');
const showColor = document.getElementById('showColorName');//inputbox
const copyBtn = document.getElementById('copyBtn');
const tostMsg = document.querySelector('.showTostMsg');


//Add evenlister start
selectBtn.addEventListener('click', function () {
    let hex = '#';
    for (let i = 0; i < 6; i++){
        hex += hexElement[createRandomNumber()]; //have a question when this function store in variable;
    }
    document.body.style.backgroundColor = hex;
    showColor.value = hex;
})
//create a random number from array.
function createRandomNumber() {
    return Math.floor(Math.random() * hexElement.length);
}
//eventlister for copy code
copyBtn.addEventListener('click', function () {
    navigator.clipboard.writeText(showColor.value);
    tostMsg.style.transform = 'scale(1)';

    setTimeout(() => {
        tostMsg.style.transform = 'scale(0)';
    }, 2000);
});

