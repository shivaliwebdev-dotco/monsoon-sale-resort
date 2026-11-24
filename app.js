// Countdown target: 30 November 2026, 23:59:59 India Standard Time.
const saleEndsAt = new Date("2026-11-30T23:59:59+05:30").getTime();
const fields = {
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds")
};
function updateCountdown() {
  const left = Math.max(0, saleEndsAt - Date.now());
  const values = {
    days: Math.floor(left / 86400000),
    hours: Math.floor((left % 86400000) / 3600000),
    minutes: Math.floor((left % 3600000) / 60000),
    seconds: Math.floor((left % 60000) / 1000)
  };
  Object.entries(values).forEach(([key, value]) => {
    fields[key].textContent = String(value).padStart(2, "0");
  });
  if (left === 0) document.querySelector(".count-label").textContent = "THE MONSOON SALE HAS ENDED";
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Reveal offer cards as they enter the viewport, with CSS delays for a staggered effect.
const cards = document.querySelectorAll(".card");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  cards.forEach(card => observer.observe(card));
} else {
  cards.forEach(card => card.classList.add("visible"));
}
