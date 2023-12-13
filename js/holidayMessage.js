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

document.getElementById('gift').addEventListener("click", holidayMessage);

function holidayMessage() {
    const randomWishIndex = Math.floor(Math.random() * niceThingsToSay.length);
    const randomWish = niceThingsToSay[randomWishIndex]
    document.getElementById('message').innerText = `${randomWish}`
}

