"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getDictionary, localize } from "@/lib/i18n";
import type { Locale } from "@/types";

export function BookingForm({
  defaultPropertySlug,
  locale,
}: {
  defaultPropertySlug?: string;
  locale: Locale;
}) {
  const [submitted, setSubmitted] = useState(false);
  const dict = getDictionary(locale);

  if (submitted) {
    return (
      <div className="rounded-[28px] border border-success/20 bg-white p-8 shadow-soft">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 font-serif text-3xl text-primary">{dict.forms.visitReceived}</h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{dict.forms.visitReceivedDescription}</p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-5 rounded-[28px] border border-border bg-white p-6 shadow-soft"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="grid gap-2 md:col-span-2">
          <Label htmlFor="property">{dict.forms.property}</Label>
          <select id="property" required defaultValue={defaultPropertySlug} className="h-12 rounded-2xl border border-border bg-white px-4 text-sm">
            <option value="">{dict.forms.selectProperty}</option>
            {properties.map((property) => (
              <option key={property.id} value={property.slug}>
                {localize(locale, property.title)}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="visit-date">{dict.forms.preferredDate}</Label>
          <Input id="visit-date" type="date" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="visit-time">{dict.forms.preferredTime}</Label>
          <Input id="visit-time" type="time" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="visit-name">{dict.forms.fullName}</Label>
          <Input id="visit-name" placeholder={dict.forms.yourName} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="visit-phone">{dict.forms.phoneWhatsapp}</Label>
          <Input id="visit-phone" type="tel" placeholder="+212 ..." required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="visit-email">{dict.forms.email}</Label>
          <Input id="visit-email" type="email" placeholder="you@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="visit-contact-method">{dict.forms.preferredContact}</Label>
          <select id="visit-contact-method" className="h-12 rounded-2xl border border-border bg-white px-4 text-sm">
            <option>{dict.forms.contactMethods.whatsapp}</option>
            <option>{dict.forms.contactMethods.phone}</option>
            <option>{dict.forms.contactMethods.email}</option>
          </select>
        </div>
        <div className="grid gap-2 md:col-span-2">
          <Label htmlFor="visit-message">{dict.forms.message}</Label>
          <Textarea id="visit-message" placeholder="WhatsApp, multiple properties, chauffeur service..." />
        </div>
      </div>
      <p className="text-sm leading-6 text-muted-foreground">{dict.forms.bookingMicrocopy}</p>
      <Button type="submit" variant="accent" size="lg">
        {dict.forms.requestVisit}
      </Button>
    </form>
  );
}
