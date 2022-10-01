const title = document.querySelector('.main-title');
const description = document.querySelector('.description');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

document.addEventListener('DOMContentLoaded', () => {
    const date = new Date();

    title.innerHTML = `${formatDate(date)}`;
    description.innerHTML = `${date.toLocaleString()}`;
    console.log(date.toISOString());

    let seconds = date.getSeconds() * 6;
    let minutes = date.getMinutes() * 6;
    let hours = date.getHours() >= 12 ? (date.getHours() - 12) * 30 + (Math.round(date.getMinutes() / 12)) * 6 : date.getHours() * 30 + (Math.round(date.getMinutes() / 12)) * 6;
    console.log(date.getHours())
    console.log(hours)
    console.log(date.getMinutes())

    setInterval(() => {

        if (new Date().getHours() === 0) {
            hours = 0;
        }
        if (seconds === 360) {
            seconds = 0;
            minutes += 6;
        }
        if (minutes === 360) {
            minutes = 0;
            hours += 6;
        }
        seconds += 6;
        second.style.transform = `rotate(${seconds}deg)`;
        minute.style.transform = `rotate(${minutes}deg)`;
        hour.style.transform = `rotate(${hours}deg)`;
    }, 1000);
});

function formatDate(date) {
    return (
        [date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
            date.getMonth() < 9 ? '0' + (Number(date.getMonth()) + 1) : Number(date.getMonth()) + 1,
            date.getFullYear(),
        ].join('-')
    );
}
