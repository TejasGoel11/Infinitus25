// Countdown to Infinitus - July 16, 2025
const countdown = document.getElementById("countdown");
const eventDate = new Date("July 16, 2025 00:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff < 0) {
    countdown.innerHTML = "The event has started!";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Background music will autoplay via the <audio> tag in HTML
// No JavaScript needed for autoplay unless browser blocks it
