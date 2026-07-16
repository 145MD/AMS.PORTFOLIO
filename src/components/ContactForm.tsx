"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MarketingContent } from "@/lib/localized-content";

type Fields = { name: string; institute: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", institute: "", email: "", message: "" };

function validate(f: Fields, copy: MarketingContent["components"]["contactForm"]): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = copy.errors.name;
  if (!f.email.trim()) e.email = copy.errors.emailRequired;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = copy.errors.emailInvalid;
  if (!f.message.trim()) e.message = copy.errors.message;
  return e;
}

const fieldClass = (invalid?: boolean) =>
  cn(
    "w-full rounded-xl border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:ring-3 focus-visible:ring-violet/40",
    invalid ? "border-destructive focus-visible:ring-destructive/25" : "border-input focus-visible:border-violet",
  );

export function ContactForm({
  content,
}: {
  content: MarketingContent;
}) {
  const copy = content.components.contactForm;
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(fields, copy);
    setErrors(found);
    if (Object.keys(found).length) return;

    const subject = encodeURIComponent(`${copy.mailSubjectPrefix} — ${fields.institute || fields.name}`);
    const body = encodeURIComponent(
      `Name: ${fields.name}\nInstitute: ${fields.institute || copy.mailInstituteFallback}\nEmail: ${fields.email}\n\n${fields.message}`,
    );
    window.location.href = `mailto:${content.site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center">
        <div className="grid size-12 place-items-center rounded-full bg-signal/20 text-signal-foreground">
          <Check className="size-6" strokeWidth={3} />
        </div>
        <h3 className="text-display mt-4 text-xl">{copy.successTitle}</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          {copy.successBody}{" "}
          <a href={`mailto:${content.site.email}`} className="font-medium text-foreground underline underline-offset-4">
            {content.site.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setFields(empty);
            setSent(false);
          }}
          className="mt-6 text-sm font-medium text-violet underline-offset-4 hover:underline"
        >
          {copy.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            {copy.fields.name}
          </label>
          <input
            id="name"
            value={fields.name}
            onChange={set("name")}
            aria-invalid={!!errors.name}
            className={fieldClass(!!errors.name)}
            placeholder={copy.placeholders.name}
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="institute" className="mb-1.5 block text-sm font-medium">
            {copy.fields.institute} <span className="text-muted-foreground">({copy.fields.optional})</span>
          </label>
          <input
            id="institute"
            value={fields.institute}
            onChange={set("institute")}
            className={fieldClass()}
            placeholder={copy.placeholders.institute}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          {copy.fields.email}
        </label>
        <input
          id="email"
          type="email"
          value={fields.email}
          onChange={set("email")}
          aria-invalid={!!errors.email}
          className={fieldClass(!!errors.email)}
          placeholder={copy.placeholders.email}
        />
        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          {copy.fields.message}
        </label>
        <textarea
          id="message"
          rows={4}
          value={fields.message}
          onChange={set("message")}
          aria-invalid={!!errors.message}
          className={cn(fieldClass(!!errors.message), "resize-y")}
          placeholder={copy.placeholders.message}
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-paper outline-none transition-all hover:bg-ink/90 focus-visible:ring-3 focus-visible:ring-violet/50"
        >
          {copy.sendRequest}
          <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
        </button>
        <p className="text-xs text-muted-foreground">
          {copy.preferEmail}{" "}
          <a href={`mailto:${content.site.email}`} className="font-medium text-foreground underline underline-offset-4">
            {content.site.email}
          </a>
        </p>
      </div>
    </form>
  );
}
