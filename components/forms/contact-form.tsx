"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/types";

export function ContactForm({ locale }: { locale: Locale }) {
  const [submitted, setSubmitted] = useState(false);
  const dict = getDictionary(locale);

  return (
    <form
      className="grid gap-5 rounded-[28px] border border-border bg-white p-6 shadow-soft"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      {submitted ? (
        <div className="rounded-[24px] bg-secondary p-6">
          <CheckCircle2 className="h-7 w-7 text-success" />
          <h3 className="mt-4 font-serif text-3xl text-primary">{dict.forms.messageSent}</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">{dict.forms.messageSentDescription}</p>
        </div>
      ) : null}
      <div className="grid gap-5 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="contact-name">{dict.forms.contactName}</Label>
          <Input id="contact-name" placeholder={dict.forms.yourName} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="contact-phone">{dict.forms.phoneWhatsapp}</Label>
          <Input id="contact-phone" type="tel" placeholder="+212 ..." required />
        </div>
        <div className="grid gap-2 md:col-span-2">
          <Label htmlFor="contact-email">{dict.forms.email}</Label>
          <Input id="contact-email" type="email" placeholder="you@example.com" />
        </div>
        <div className="grid gap-2 md:col-span-2">
          <Label htmlFor="contact-topic">{dict.forms.contactTopic}</Label>
          <select id="contact-topic" className="h-12 rounded-2xl border border-border bg-white px-4 text-sm">
            <option>{dict.forms.topics.buying}</option>
            <option>{dict.forms.topics.renting}</option>
            <option>{dict.forms.topics.listing}</option>
            <option>{dict.forms.topics.investment}</option>
          </select>
        </div>
        <div className="grid gap-2 md:col-span-2">
          <Label htmlFor="contact-message">{dict.forms.message}</Label>
          <Textarea id="contact-message" placeholder="Tell us what kind of property or support you need." required />
        </div>
      </div>
      <Button type="submit" variant="accent" size="lg">
        {dict.forms.sendInquiry}
      </Button>
    </form>
  );
}
