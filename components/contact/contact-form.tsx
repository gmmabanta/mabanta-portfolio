"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const inputClasses =
  "w-full bg-surface-container-low border-2 border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/60 focus:border-primary focus:outline-none transition-colors";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    // No backend yet: open the user's mail client with a prefilled message.
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="font-label-caps text-label-caps text-secondary"
        >
          NAME
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Ada Lovelace"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="font-label-caps text-label-caps text-secondary"
        >
          EMAIL
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-label-caps text-label-caps text-secondary"
        >
          MESSAGE
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell me about your project..."
          className={inputClasses}
        />
      </div>

      <Button type="submit" variant="hero" size="lg" className="self-start">
        Send Message
      </Button>

      {submitted && (
        <p className="font-body-md text-body-md text-secondary">
          Thanks! Your email client should have opened. If not, reach me at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="decoration-2 underline underline-offset-4"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
