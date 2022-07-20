// get elements
const timer_form = document.querySelector('.timer-form');
const timer = document.querySelector('.timer');
const timerSound = document.querySelector('.timer-sound');
const timeOut = document.querySelector('.time-out');
const clickSound = document.querySelector('.click-sound');

// timer form
timer_form.onsubmit = (e) =>{

    e.preventDefault();
    
    clickSound.play();

    // get form value
    const form_data = new FormData(e.target);
    const {date, time} = Object.fromEntries(form_data.entries());


    // timer.innerHTML = `<h2>${total_day} Day : ${total_hour} Hours : ${min} Mnts : ${sec} Sec</h2>`;

    let count = setInterval(() => {
        //get timestamp
        let start_time = Date.now();
        let end_time = new Date(date + ' ' + time);

        let remaining_time = Math.floor(Math.abs(end_time.getTime() - start_time))
        
        // get value from time

        let total_sec = Math.floor(remaining_time / 1000);
        let total_min = Math.floor(total_sec / 60);
        let total_hour = Math.floor(total_min / 60);
        let total_day = Math.floor(total_hour / 24);

        let hours =  total_hour - ( total_day * 24 );
        let min =  total_min - ( total_day * 24 * 60) - (hours * 60);
        let sec =  total_sec - ( total_day * 24 * 60 * 60) - (hours * 60 * 60) - (min * 60);


        // adding 0 before singel number ( < 10)
        total_day < 10 ? total_day = '0' + total_day : total_day;
        hours < 10 ? hours = '0' + hours : hours;
        min < 10 ? min = '0' + min : min;
        sec < 10 ? sec = '0' + sec : sec;

        timer.innerHTML = `<h2>${total_day} D : ${hours} H : ${min} M : ${sec} S</h2>`;

        timerSound.play();

        if(total_sec == 0) {
            clearInterval(count);
            timer.innerHTML = '<h2>Time Over</h2>';
            timeOut.play();

            setTimeout(() => {
                timer.innerHTML = "";
                e.target.reset();
            }, 3000);
        }

    }, 1000);
    
}

