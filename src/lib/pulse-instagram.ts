export function pulseInstagramCard() {
  const card = document.querySelector<HTMLElement>(
    "#instagram-social-card .instagram-card"
  );
  if (!card) return;
  card.classList.remove("ig-pulse");
  void card.offsetWidth; // force reflow so animation re-triggers every time
  card.classList.add("ig-pulse");
}
