"use client";

import { pulseInstagramCard } from "@/lib/pulse-instagram";

export function InstagramLink() {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    document.getElementById("socials")?.scrollIntoView({ behavior: "smooth" });
    setTimeout(pulseInstagramCard, 400);
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
