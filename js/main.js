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

class City {
    constructor(name, latitude, longitude) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    }
}
const cities = [
    new City ('New York', 40.730610, -73.935242),
    new City ('Tokyo', 35.652832, 139.839478),
    new City ('Istanbul', 41.015137, 28.979530),
    new City ('Kyoto', 35.011665, 135.768326),
    new City ('Bahrain',25.9434256, 50.6014985),
    new City ('Belgrade', 44.787197, 20.457273),
    new City ('Amsterdam', 52.377956, 4.897070),
    new City ('Cologne', 50.935173, 6.953101),
    new City ('Rome', 41.902782, 12.496366),
    new City ('Lisbon', 38.736946, -9.142685),
    new City ('Budapest', 47.497913, 19.040236),
    new City ('New Delhi', 28.644800, 77.216721),
    new City ('Cairo', 30.033333, 31.233334),
    new City ('Paris', 48.864716, 2.349014),
    new City ('London', 51.509865, -0.118092),
    new City ('Athens', 37.983810, 23.727539),
    new City ('Vienna', 48.210033, 16.363449),
    new City ('Chicago', 41.881832, -87.623177),
    new City ('Sydney', -33.865143, 151.209900),
    new City ('Kiev', 50.450001, 30.523333),
    new City ('Ankara', 39.925533, 32.866287),
    new City ('Hamburg', 53.551086, 9.993682),
    new City ('Florence', 43.769562, 11.255814),
    new City ('Atlantis', 31.415538, -24.459229)
    ]

const activities = ['Santa is not leaving a single crumb back.',
    'Santa is checking if the milk is spoiled.',
    'Santa is dancing to the beat.',
    'Santa is trying hard to fit the presents into the socks.',
    'Santa is stuck in a chimney.',
    'Santa is checking out the naughty list.',
    'Santa sees that little Timmy is not on the list.',
    'Santa is completing another Python tutorial while flying.',
    'Santa is around the world, around the world.',
    'Santa is full of cookies and milk.',
    'Santa is growing an appreciation for K-Pop.',
    'Santa is off to collect that Christmas EDM mixtape.',
    'Santa is transporting an UBER passenger.']

document.getElementById('searchButton').addEventListener("click", santaLocator);


const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function santaLocator() {
    const randomCityIndex = Math.floor(Math.random() * cities.length);
    const randomCity = cities[randomCityIndex]

    const randomActivityIndex = Math.floor(Math.random() * activities.length);
    const randomActivity = activities[randomActivityIndex]

    document.getElementById('locationResult').innerText = `Found him in ${randomCity.name}!`
    L.marker([randomCity.latitude, randomCity.longitude]).addTo(map);
    map.setView([randomCity.latitude, randomCity.longitude], 13);
    const popup = L.popup()
        .setLatLng([randomCity.latitude, randomCity.longitude])
        .setContent(`${randomActivity}`)
        .openOn(map)
}

