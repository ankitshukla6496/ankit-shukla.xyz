"use client";

export function InstagramLink() {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    // Scroll to My Socials section
    document.getElementById("socials")?.scrollIntoView({ behavior: "smooth" });
    // Pulse the Instagram card after a short delay to let scroll settle
    setTimeout(() => {
      const card = document.querySelector<HTMLElement>("#instagram-social-card .instagram-card");
      if (!card) return;
      card.classList.remove("ig-pulse");
      // Force reflow so re-adding the class re-triggers the animation
      void card.offsetWidth;
      card.classList.add("ig-pulse");
    }, 400);
  }

  return (
    <a
      href="#socials"
      onClick={handleClick}
      className="font-medium underline underline-offset-2 hover:opacity-70 transition-opacity cursor-pointer"
      style={{ color: "#5c4020" }}
    >
      Instagram
    </a>
  );
}
