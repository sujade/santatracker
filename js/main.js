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

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance <= 0) {
        clearInterval(countDown);
        document.getElementById("demo").innerHTML = "Merry Christmas and Happy Holidays!";
    }
}, 1000);

const cities = ['New York', 'Tokyo', 'Istanbul', 'Kyoto', 'Bahrain', 'Belgrade', 'Amsterdam', 'Cologne', 'Rome', 'Lisbon', 'Paris', 'London', 'Athens', 'Vienna', 'Delhi', 'Chicago', 'Sydney', 'Kiev', 'Ankara', 'Hamburg', 'Florence']
const activities = ['is not leaving a single crumb back.', '... wait- is that milk spoiled?', 'is dancing to the beat.', 'trying hard to fit the presents into the socks.', 'is stuck in a chimney.', 'is checking out the naughty list.', 'little Timmy is not on the list.', 'is completing another Python tutorial while flying.', 'is around the world, around the world.', 'this is his last stop for tonight!', 'is full of cookies and milk.', 'is growing an appreciation for K-Pop.']

document.getElementById('searchButton').addEventListener("click", santaLocator);

function santaLocator() {
    const randomCityIndex = Math.floor(Math.random() * cities.length);
    const randomCity = cities[randomCityIndex]

    const randomActivityIndex = Math.floor(Math.random() * activities.length);
    const randomActivity = activities[randomActivityIndex]

    document.getElementById('locationResult').innerText = `Santa is in ${randomCity} and ${randomActivity}`
}

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
