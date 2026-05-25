"use client";

import { useMemo, useState } from "react";

import Button from "@/components/ui/button/Button";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const whatsappLink = useMemo(() => {
    const text = `Hi Emmanuel,

Name: ${name || "(not given)"}
Email: ${email || "(not given)"}

Message:
${message}`;

    return `mailto:olajubajeifeoluwa93@gmail.com?subject=Contact&body=${encodeURIComponent(text)}`;
  }, [name, email, message]);

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();

        if (!message.trim()) return;

        window.open(whatsappLink, "_blank");
      }}
    >
      {/* NAME */}
      <div className="flex flex-col gap-2">
        <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
          Your Name
        </label>

        <input
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-xl border border-border bg-white/3 px-5 py-4 text-sm text-text outline-none transition-all duration-300 placeholder:text-muted focus:border-primary/50 focus:bg-primary/3"
        />
      </div>

      {/* EMAIL */}
      <div className="flex flex-col gap-2">
        <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
          Your Email
        </label>

        <input
          type="email"
          placeholder="john@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-xl border border-border bg-white/3 px-5 py-4 text-sm text-text outline-none transition-all duration-300 placeholder:text-muted focus:border-primary/50 focus:bg-primary/3"
        />
      </div>

      {/* MESSAGE */}
      <div className="flex flex-col gap-2">
        <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
          Your Message
        </label>

        <textarea
          placeholder="Tell me about your project..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-40 resize-none rounded-xl border border-border bg-white/3 px-5 py-4 text-sm text-text outline-none transition-all duration-300 placeholder:text-muted focus:border-primary/50 focus:bg-primary/3"
        />
      </div>

      <div className="pt-3">
        <Button type="submit">Send Message</Button>
      </div>
    </form>
  );
}
