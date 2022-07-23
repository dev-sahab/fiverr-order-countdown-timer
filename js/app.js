// get elements
const timer_form = document.querySelector('.timer-form');
const timer = document.querySelector('.timer');
const timerSound = document.querySelector('.timer-sound');
const timeOut = document.querySelector('.time-out');
const clickSound = document.querySelector('.click-sound');

let count;

// timer form
timer_form.onsubmit = (e) =>{

    e.preventDefault();

    clearInterval(count);
    
    clickSound.play();

    // get form value
    const form_data = new FormData(e.target);
    const {date, time} = Object.fromEntries(form_data.entries());

    if (!date || !time){
        timer.innerHTML = msgAlert('All feilds are required');
    }
    else{

        count = setInterval(() => {
            
            countDown(date, time, timer, count, e);

            timerSound.play();

        }, 1000);

    }

}

