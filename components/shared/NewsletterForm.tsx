"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

// Footer "Stay Updated" signup. Sent through the same Splitforms inbox as the
// contact form so no email typed here is lost.
export function NewsletterForm({ inputClassName, buttonClassName }: { inputClassName: string; buttonClassName: string }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    try {
      const res = await fetch("https://splitforms.com/api/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = await res.json().catch(() => ({} as { success?: boolean }));
      if (res.ok && data.success !== false) {
        form.reset();
        setState("done");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  return (
    <div className="w-full lg:w-auto max-w-md">
      <form onSubmit={handleSubmit} className="flex w-full">
        <input type="hidden" name="access_key" value="7bc020b306754409996c61f348804263" />
        <input type="hidden" name="subject" value="Newsletter signup — Design Homes" />
        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Enter your email"
          className={inputClassName}
        />
        <button type="submit" disabled={state === "sending"} className={buttonClassName}>
          {state === "sending" ? "Sending…" : "Subscribe"}
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
      {state === "done" && <p className="mt-2 text-sm text-[#B69560]" role="status">Thanks, you&apos;re subscribed.</p>}
      {state === "error" && <p className="mt-2 text-sm text-red-400" role="alert">Couldn&apos;t subscribe. Please try again or email info@thedesignhomes.com.au.</p>}
    </div>
  );
}
