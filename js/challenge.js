// Define display items
const timerDisplay = document.querySelector('#counter');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const heart = document.querySelector('#heart');
const pause = document.querySelector('#pause');
const form = document.querySelector('#comment-form');
const submitBtn = document.querySelector('#submit');
const textDiv = document.querySelector('#list');
const likeBox = document.querySelector('#likeBox');
let counter = 0;
let likeObj = {};

// List of functions to create
// 1. DONE - change the text of the timer 
// 2. DONE -create a timer that updates the innerText based on an interval
// 3. DONE -inc/dec the timer's counter by 1 when clicked
// 4. Log the current value of the timer when the like button is clicked and log a new counter with how many times that current value has been liked
// 5. DONE - DOM manipulation of form submission
// 6. DONE - Be able to pause the timer which will display new inner text on the pause/resume button and "grey out" all other buttons



// Function Declarations
// ______________________________________________________________

// Getting the timer to tick seconds
let clockTick = setInterval(passTime, 1000);

function passTime(){
    timerDisplay.innerText = counter;
    counter++;    
    console.log(counter);
}

// ______________________________________________________________

// Event Listeners
// ______________________________________________________________

minus.addEventListener('click', function(){
    timerDisplay.innerText = counter;
    counter--;
    console.log(counter);
})
plus.addEventListener('click', function(){
    timerDisplay.innerText = counter;
    counter++;
    console.log(counter);
})

heart.addEventListener('click', function(){
    let likeLi = document.createElement('li');
    likeLi.innerHTML = `The number ${counter} has received a like.`;
    likeBox.appendChild(likeLi);
    console.log(likeLi)
})


form.addEventListener('submit', function(e){
    e.preventDefault();
    let p = document.createElement('p')
    p.innerText = e.target['comment-input'].value;
    textDiv.appendChild(p);
    form.reset();
})





pause.addEventListener('click', function(){
    if(pause.innerText === 'pause'){
        clearInterval(clockTick);
        minus.disabled = true;
        plus.disabled = true;
        // heart.disabled = true;
        form.disabled = true;
        pause.innerText = 'resume';
    } else {
    minus.disabled = false;
    plus.disabled = false;
    // heart.disabled = false;
    form.disabled = false;
    pause.innerText = 'pause';
    clockTick = setInterval(passTime, 1000)};
});
  
