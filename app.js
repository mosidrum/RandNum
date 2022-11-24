




















const number = document.getElementById('number');

const button = document.getElementById('generator');

const randomNumberGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);

   number.textContent = randomNumber
};





















button.addEventListener('click', randomNumberGenerator)
randomNumberGenerator();