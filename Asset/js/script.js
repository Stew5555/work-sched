// current day, month, and date
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));

const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));
// matching 3 diffrent colors with past time, current time and futre time
Array.from(rows).forEach(row => { 
    let rowTime = row.id, 
    rowHour;
    if (rowTime) {
        rowHour = parseInt(rowTime);
    }
    if (rowHour) {
        // sets colors accordingly
        if (currentHour === rowHour) {
            setColor(row, "#ff6961")
        }else if ((currentHour < rowHour) && (currentHour > rowHour - 7)) {
            setColor(row, "#77dd77")
        }else if ((currentHour > rowHour) && (currentHour < rowHour + 7)) {
            setColor(row, "#d3d3d3")
        }else {
            setColor(row, "#d3d3d3")
        }
        
    }
    
});

function setColor(element, color) {
    element.style.backgroundColor = color;
    console.log(setColor)
}

// credit: https://codepen.io/mmousawy/pen/LedZPa

// localStorage

var inputText = document.querySelector('.textarea');
var saveBtn = document.getElementById('btn')

saveBtn.addEventListener('click', updateOutput);

inputText.textContent = localStorage.getItem('content')

function updateOutput() {
    localStorage.setItem('content', inputText.value);
}