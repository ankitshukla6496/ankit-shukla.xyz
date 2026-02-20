function pulseCard(wrapperId: string, cardClass: string, pulseClass: string) {
  const card = document.querySelector<HTMLElement>(
    `#${wrapperId} .${cardClass}`
  );
  if (!card) return;
  card.classList.remove(pulseClass);
  void card.offsetWidth; // force reflow so animation re-triggers every time
  card.classList.add(pulseClass);
  // Remove pulse class once animation finishes so hover styles are restored
  card.addEventListener("animationend", () => card.classList.remove(pulseClass), { once: true });
}

export function pulseInstagramCard() {
  pulseCard("instagram-social-card", "instagram-card", "ig-pulse");
}

export function pulseLinkedInCard() {
  pulseCard("linkedin-social-card", "linkedin-card", "li-pulse");
}

export function pulseGitHubCard() {
  pulseCard("github-social-card", "github-card", "gh-pulse");
}
