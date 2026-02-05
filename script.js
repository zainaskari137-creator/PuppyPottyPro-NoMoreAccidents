// simple scroll animation
const cards = document.querySelectorAll('.card, .faq-box');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});
