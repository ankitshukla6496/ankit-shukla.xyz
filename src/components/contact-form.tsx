"use client";

import { useActionState } from "react";
import {
  sendContactMessage,
  type ContactFormState,
} from "@/app/contact/action";

const initialState: ContactFormState = { success: false, error: null };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState
  );

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          required
          className="w-full border border-border rounded-xl px-4 py-3 text-text bg-bg-muted placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200 hover:border-border-hover"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          required
          className="w-full border border-border rounded-xl px-4 py-3 text-text bg-bg-muted placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200 hover:border-border-hover"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message..."
          rows={5}
          required
          className="w-full border border-border rounded-xl px-4 py-3 text-text bg-bg-muted placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200 hover:border-border-hover resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="bg-accent text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg accent-glow disabled:opacity-50 disabled:hover:translate-y-0"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
      {state.success && (
        <p className="text-success text-sm font-medium">
          Message sent successfully! I&apos;ll get back to you soon.
        </p>
      )}
      {state.error && (
        <p className="text-red-400 text-sm font-medium">{state.error}</p>
      )}
    </form>
  );
}
