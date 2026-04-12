"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const errs: Record<string, string> = {};
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name || name.length < 2) errs.name = "Name must be at least 2 characters.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email address.";
    if (!message || message.length < 10)
      errs.message = "Message must be at least 10 characters.";

    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setState("submitting");
    setErrors({});

    // Simulate API call (replace with real endpoint)
    await new Promise((r) => setTimeout(r, 1000));
    setState("success");
    form.reset();
  }

  if (state === "success") {
    return (
      <div
        role="alert"
        className="rounded-xl border border-[var(--color-accent-light)] bg-[var(--color-accent-light)] p-8 text-center"
      >
        <div className="mb-3 text-3xl">✓</div>
        <h3 className="text-base font-semibold text-[var(--color-text)]">
          Message sent!
        </h3>
        <p className="mt-1 text-sm text-[var(--color-muted)]">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-4 text-sm font-medium text-[var(--color-accent)] underline underline-offset-2 hover:opacity-70 transition-opacity"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="mb-1.5 block text-sm font-medium text-[var(--color-text)]"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-[var(--color-text)] placeholder-[var(--color-muted)] outline-none transition-colors bg-[var(--color-surface)] focus:border-[var(--color-accent)] ${
            errors.name ? "border-red-400" : "border-[var(--color-border)]"
          }`}
        />
        {errors.name && (
          <p role="alert" className="mt-1 text-xs text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="mb-1.5 block text-sm font-medium text-[var(--color-text)]"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="your@email.com"
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-[var(--color-text)] placeholder-[var(--color-muted)] outline-none transition-colors bg-[var(--color-surface)] focus:border-[var(--color-accent)] ${
            errors.email ? "border-red-400" : "border-[var(--color-border)]"
          }`}
        />
        {errors.email && (
          <p role="alert" className="mt-1 text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm font-medium text-[var(--color-text)]"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell me about your project..."
          className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm text-[var(--color-text)] placeholder-[var(--color-muted)] outline-none transition-colors bg-[var(--color-surface)] focus:border-[var(--color-accent)] ${
            errors.message ? "border-red-400" : "border-[var(--color-border)]"
          }`}
        />
        {errors.message && (
          <p role="alert" className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      <button
        id="contact-submit"
        type="submit"
        disabled={state === "submitting"}
        className="w-full rounded-lg bg-[var(--color-accent)] py-3 text-sm font-semibold text-white transition-opacity hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
