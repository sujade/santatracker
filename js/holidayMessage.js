const niceThingsToSay = [
    'Warmest wishes!',
    'Wishing you a wonderful holiday season!',
    'Happy holidays!',
    'Seasons greetings!',
    'Warm and cozy holiday wishes!',
    'Have a jolly holiday',
    'Cheers to warm holiday memories!',
    'Merry Christmas!'
]

function pickHolidayMessage() {
    const randomWishIndex = Math.floor(Math.random() * niceThingsToSay.length);
    document.getElementById('message').innerText = niceThingsToSay[randomWishIndex]
}

document.getElementById('gift').addEventListener("click", pickHolidayMessage);
