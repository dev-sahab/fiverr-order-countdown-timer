
/**
 * Form validation Alert Function
 */

const msgAlert = (msg, type = 'danger') => {
    return `<p class="alert alert-${type} d-flex align-items-center justify-content-between my-2">${msg}<button data-bs-dismiss="alert" class="ms-2 btn-close"></button></p>`;
}


/**
 * Time countdown
 */

const countDown = (date, time, text, interval = null , e = null) => {

    //get timestamp
    let start_time = Date.now();
    let end_time = new Date(date + ' ' + time);

    let remaining_time = Math.floor(Math.abs(( end_time.getTime() - start_time + 1000 ))); 
    //add 1s for delay of intarval when submit
    
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

    text.innerHTML = `<h2>${total_day} D : ${hours} H : ${min} M : ${sec} S</h2>`;

    if(total_sec == 0) {
        clearInterval(interval);
        text.innerHTML = '<h2>Time Over</h2>';
        timeOut.play();

        setTimeout(() => {
            text.innerHTML = "";
            e.target.reset();
        }, 3000);
    }

}