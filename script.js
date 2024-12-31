document.addEventListener("DOMContentLoaded", () => {
    const currentTimeEl = document.getElementById("current-time");
    const countdownEl = document.getElementById("countdown");
    
    function updateClock() {
        const now = new Date();
        currentTimeEl.textContent = `Current Time: ${now.toLocaleTimeString()}`;
    }

    function updateCountdown() {
        const now = new Date();
        const newYear = new Date(now.getFullYear() + 1, 0, 1);
        const diff = newYear - now;

        if (diff <= 0) {
            countdownEl.innerHTML = `<h2>🎉 Happy New Year! 🎆</h2>`;
            document.body.classList.add("fireworks");
        } else {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);
            countdownEl.textContent = `Time Remaining: ${days} days ${hours}:${minutes}:${seconds}`;
        }
    }

    setInterval(updateClock, 1000);
    setInterval(updateCountdown, 1000);
});