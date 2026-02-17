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
          className="w-full border border-border rounded-xl px-4 py-3 text-text bg-white focus:outline-none focus:ring-2 focus:ring-highlight/50 focus:border-highlight transition-all duration-200 hover:border-highlight/30"
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
          className="w-full border border-border rounded-xl px-4 py-3 text-text bg-white focus:outline-none focus:ring-2 focus:ring-highlight/50 focus:border-highlight transition-all duration-200 hover:border-highlight/30"
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
          className="w-full border border-border rounded-lg px-4 py-3 text-text bg-white focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="group relative overflow-hidden text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
        style={{ background: 'linear-gradient(135deg, #e94560 0%, #f77f00 100%)' }}
      >
        <span className="relative z-10">{isPending ? "Sending..." : "Send Message"}</span>
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: 'linear-gradient(135deg, #f77f00 0%, #e94560 100%)' }}
        />
      </button>
      {state.success && (
        <p className="text-green-600 text-sm font-medium">
          Message sent successfully! I&apos;ll get back to you soon.
        </p>
      )}
      {state.error && (
        <p className="text-red-600 text-sm font-medium">{state.error}</p>
      )}
    </form>
  );
}
