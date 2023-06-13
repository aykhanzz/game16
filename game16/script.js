
let numbers = [];
for (let i = 1; i <= 16; i++) {
    numbers.push(i);
}


let table = document.getElementById("dask");
for (let i = 0; i < 4; i++) {
    var row = table.insertRow(i);
    for (let j = 0; j < 4; j++) {
        let cell = row.insertCell(j);
        cell.addEventListener("click", checkCell);
    }
}

mix(numbers);

function mix(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

let index = 0;
for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].textContent = numbers[index];
        index++;
    }
}

let count = 1;
let gameOver = false;

function checkCell() {

    let Number = parseInt(this.textContent);
    if (Number === count) {
        this.style.backgroundColor = "green";
        count++;

        if (count === 17) {
            gameOver = true;
            setTimeout(function () {
                alert("PERFECT, You are amazing !!!");
            }, 1);


        }
    } else {
        this.style.backgroundColor = "red";
        gameOver = true;
        setTimeout(function () {
            alert("TRY AGAIN :)");
            location.reload();
        }, 1);

    }
}

let restartButton = document.getElementById("restartButton");
restartButton.addEventListener("click", function () {
    location.reload();

});




const timerElement = document.getElementById("timer");

let timer;

startTimer();

function startTimer() {
    let timeLeft = 20;
    timerElement.innerText = "Time Left : " + timeLeft;
    timer = setInterval(function () {
        timeLeft--;
        timerElement.innerText = "Time Left : " + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);

            setTimeout(function () {
                alert("You lose, try again :) ");
                location.reload();
            }, 1);

        }
    }, 1000);
}


