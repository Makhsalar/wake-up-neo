// --- MATRIX BACKGROUND ---

const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const characters = '01';
const charArray = characters.split('');

const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);


const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = Math.floor(Math.random() * canvas.height / fontSize);
}

function drawMatrix() {

    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    ctx.fillStyle = '#00ff00';
    ctx.font = fontSize + 'px monospace';


    for (let i = 0; i < drops.length; i++) {

        const text = charArray[Math.floor(Math.random() * charArray.length)];
        

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);


        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }


        drops[i]++;
    }
}

// --- DIGITAL CLOCK ---

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();


    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}


// --- START EVERYTHING ---


setInterval(drawMatrix, 33);


setInterval(updateClock, 1000);


updateClock();