// Elementos del DOM
const passwordInput = document.getElementById('password');
const loginBox = document.getElementById('login');
const contentBox = document.getElementById('content');
const calendar = document.getElementById('calendar');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupQuote = document.getElementById('popup-quote');
const correctPassword = "janlos";

const quotes = [
    "En tus ojos se encuentra el sol, / y en tu sonrisa mi mejor canción. / Cada momento junto a ti, / es mi razón de vivir.",
    "En el viento escucho tu voz, / susurrando mi nombre con amor. / En cada rincón de mi ser, / te quiero siempre, mi amanecer.",
    "Tus manos son mi refugio, / tus besos mi salvación. / En cada latido siento, / que eres mi corazón.",
    "Contigo el cielo es más azul, / y la luna brilla más. / Eres la razón que da luz, / a mi vida al caminar.",
    "Mi alma se enciende al verte, / y mi mundo gira a tu alrededor. / Cada día más te quiero, / como un sol que no deja de brillar.",
    "Eres mi sol en el día gris, / la calma en mi tormenta. / En tus brazos encuentro paz, / y en tu mirada mi respuesta.",
    "Cada palabra tuya es poesía, / cada caricia un verso perfecto. / Eres mi musa en la vida, / mi inspiración, mi cielo y mi fuego.",
    "Tu amor es mi refugio seguro, / mi razón para seguir. / Cada día a tu lado, / es un motivo para vivir.",
    "Contigo quiero perderme, / en un mundo lleno de amor. / Cada segundo a tu lado, / es un regalo, es un ardor.",
    "Eres mi sueño hecho realidad, / mi razón de respirar. / Cada día contigo es especial, / mi amor por ti no tiene final.",
    "En el alba tu voz me llama, / en la noche tu amor me abraza. / Eres mi razón para sonreír, / en tu amor quiero existir.",
    "Tu sonrisa es la melodía, / que me llena de alegría. / En tus ojos veo el mar, / un océano de paz, mi hogar.",
    "Tus abrazos son mi refugio, / y tus besos mi libertad. / En tu amor hallé la calma, / mi razón de felicidad.",
    "En tu alma encontré mi calma, / en tus ojos la luz. / Cada paso que doy contigo, / es un suspiro de virtud.",
    "Eres la estrella en mi cielo, / el sol que ilumina mi andar. / En cada beso tuyo siento, / que te quiero más y más.",
    "Cada momento a tu lado es único, / cada suspiro es eterno. / Tu amor es mi milagro, / mi razón y mi sueño tierno.",
    "Tus palabras me dan fuerzas, / tus gestos son mi paz. / Eres mi gran amor, / y siempre serás mi sol.",
    "En tus ojos guardo mis sueños, / en tu voz escucho mi canción. / Eres mi amor infinito, / mi más dulce inspiración.",
    "En cada latido de mi corazón, / late tu nombre con pasión. / Eres mi universo entero, / mi amor verdadero."
];

function togglePassword() {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
}

function checkPassword() {
    if (passwordInput.value === correctPassword) {
        loginBox.classList.add('hidden');
        contentBox.classList.remove('hidden');
        generateCalendar();
    } else {
        alert('Contraseña incorrecta');
    }
}

function generateCalendar() {
    const today = new Date();
    const startDay = 5;
    const endDay = 23;

    for (let i = startDay; i <= endDay; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');

        if (today.getMonth() === 11 && today.getDate() >= i) {
            // Día desbloqueado si ya pasó
            dayDiv.innerHTML = `<span>${i}</span>`;
            dayDiv.onclick = () => openPopup(i, quotes[i-5]);
        } else {
            // Día bloqueado si aún no llega
            dayDiv.classList.add('locked');
            dayDiv.innerHTML = `<span>${i}</span>`;
        }

        calendar.appendChild(dayDiv);
    }
}

function openPopup(day, quote) {
    const dayElement = document.querySelector(`.day:nth-child(${day-4})`);
    if (!dayElement.classList.contains('locked')) {
        popupTitle.textContent = `Día ${day}`;
        popupQuote.textContent = quote;
        popup.style.display = 'block';
        overlay.style.display = 'block';
    }
}

function closePopup() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

// Animación de corazones
function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * window.innerWidth}px`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}

createHearts();