let buttonClicked = false;
let timerRunning = false;

//need to connect the onbuttonclick function with timeoutfunction
//need to have 20 second time out then 3 exercise check box 
//indicate the timer for 20min on repeat and this sync well with the browser time 
//add restart time button 
//need to change the button work to countdown when clicked, and stop the timer when button clicked again

function onButtonClick() {
    buttonClicked = !buttonClicked;
    if (buttonClicked) {
        alert('Eye saving mode activated!');
        button.style.background = '#9DC183'; 
        startTimer();
    } else {
        alert('Eye saving mode deactivated!');
        button.style.background = '';
    }
  }
    const button = document.querySelector('button');
    button.addEventListener('click', onButtonClick);

  //used to make the button function when clicked and change colour 
  //https://www.altcademy.com/blog/how-to-create-a-button-in-javascript/
  //https://stackoverflow.com/questions/1819878/changing-button-color-programmatically
  //https://www.c-sharpcorner.com/blogs/change-the-background-color-of-a-button-with-javascript1
  //e-Button-Color-in-Javascript 

function timeoutFunction() {
    alert("It's time to take a break! Rest for 20 seconds.");

    function countdown(secs) {
        if (secs > 0) {
            setTimeout(function() {
                countdown(secs - 1);
            }, 1000);
        }
    }
    
    setTimeout(timeoutFunction, 20 * 60 * 1000); // 20 minutes in milliseconds
}

setTimeout(timeoutFunction, 20 * 60 * 1000);

    // used to learn timeout function 
    //https://www.w3schools.com/js/js_timing.asp 
    //https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
    //https://www.freecodecamp.org/news/javascript-wait-how-to-sleep-n-seconds-in-js-with-settimeout/

    
    //https://stackoverflow.com/questions/1482555/alert-prompt-checkboxes
    //https://jqueryui.com/dialog/ 
    //https://stackoverflow.com/questions/11599666/get-the-value-of-checked-checkbox


var timeLimitInMinutes = 20;
var timeLimitInSeconds = timeLimitInMinutes * 60;
var timerElement = document.getElementById('timer');

function startTimer() {
  timeLimitInSeconds--;
  var minutes = Math.floor(timeLimitInSeconds / 60);
  var seconds = timeLimitInSeconds % 60;

  if (timeLimitInSeconds < 0) {
    timerElement.textContent = '00:00';
    clearInterval(timerInterval);
    return;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds <10) {
    seconds = '0' + seconds;
  }

  timerElement.textContent = minutes + ':' + seconds;
}

var timerInterval = setInterval(startTimer, 1000);

//20 minute timer
//https://codepen.io/luci/pen/EEavVR