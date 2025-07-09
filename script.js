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

// Background music autoplay after user interaction
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");

  // Attempt autoplay on click
  const enableAudio = () => {
    music.play().catch(() => {
      console.log("Autoplay blocked. User interaction required.");
    });
    window.removeEventListener("click", enableAudio);
  };

  window.addEventListener("click", enableAudio);
});

// Optional: Toggle music mute/unmute (used with .music-toggle button)
function toggleMusic() {
  const music = document.getElementById("bg-music");
  music.muted = !music.muted;
}
