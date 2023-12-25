const countDownDate = new Date("Dec 24, 2023 00:00:00").getTime();

let countDown = setInterval(function () {

    const now = new Date().getTime();

    const distance = countDownDate - now;
    const oneMinute = 1000 * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;
    const days = Math.floor(distance / oneDay);
    const hours = Math.floor((distance % oneDay) / oneHour);
    const minutes = Math.floor((distance % oneHour) / oneMinute);
    const seconds = Math.floor((distance % oneMinute) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;

    if (distance <= 0) {
        clearInterval(countDown);
        document.getElementById("countdown").innerHTML = "Merry Christmas and Happy Holidays!";
    }
}, 1000);
