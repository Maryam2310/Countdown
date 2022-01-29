
countDown = () => {

    let futureDate = Date.parse("Jan 1, 2023 15:37:25");
    let currentDate = new Date();
    let differceBtnDates = futureDate - currentDate;

    let sec = Math.floor(differceBtnDates % (1000 * 60) / 1000);
    let min = Math.floor(differceBtnDates % (1000 * 60 * 60) / (1000 * 60));
    let hours = Math.floor(differceBtnDates % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let days = Math.floor(differceBtnDates / (1000 * 60 * 60 * 24));




    let time = '';
    time += `<div class='countdown'>
<div class='days'>${days}<span>days<span></div>:
<div class='days'>${hours = hours < 10 ? '0' + hours : hours}<span>hours<span></div>:
<div class='days'>${min = min < 10 ? '0' + min : min}<span>mins<span></div>:
<div class='days'>${sec = sec < 10 ? '0' + sec : sec}<span>secs<span></div>

</div>`;



    document.querySelector('.countdown').innerHTML = time;


    if (differceBtnDates < 0) {
        clearInterval(countDown)
        document.querySelector('.countdown').innerHTML = 'Expired';

    }
}
setInterval(countDown, 1000);
