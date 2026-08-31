"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Send } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaeyewpe";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-xl px-4 py-6">
      <p className="mb-5 text-xs text-comment">{"// contact.tsx — reach out"}</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Field label="name">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded border border-border-light bg-editor px-3 py-2 font-sans text-sm text-primary outline-none focus:border-blue"
          />
        </Field>

        <Field label="email">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded border border-border-light bg-editor px-3 py-2 font-sans text-sm text-primary outline-none focus:border-blue"
          />
        </Field>

        <Field label="message">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
            className="w-full resize-none rounded border border-border-light bg-editor px-3 py-2 font-sans text-sm text-primary outline-none focus:border-blue"
          />
        </Field>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={status === "sending"}
            className="flex w-fit items-center gap-1.5 rounded border border-border-light px-3 py-1.5 text-xs text-primary hover:bg-tabs disabled:opacity-50"
          >
            <Send size={13} /> {status === "sending" ? "sending..." : "send"}
          </button>

          {status === "sent" && (
            <span className="text-xs text-type">message sent — thanks!</span>
          )}
          {status === "error" && (
            <span className="text-xs text-string">
              something went wrong — email danielfernandez.ny@gmail.com directly instead.
            </span>
          )}
        </div>
      </form>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs text-fn">{label}</span>
      {children}
    </label>
  );
}
