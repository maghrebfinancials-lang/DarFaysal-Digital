"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/types";

export function ValuationForm({ locale }: { locale: Locale }) {
  const [submitted, setSubmitted] = useState(false);
  const dict = getDictionary(locale);

  if (submitted) {
    return (
      <div className="rounded-[28px] border border-success/20 bg-white p-8 shadow-soft">
        <CheckCircle2 className="h-8 w-8 text-success" />
        <h3 className="mt-4 font-serif text-3xl text-primary">{dict.forms.valuationReceived}</h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{dict.forms.valuationReceivedDescription}</p>
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
        <div className="grid gap-2">
          <Label htmlFor="owner-name">{dict.forms.ownerName}</Label>
          <Input id="owner-name" placeholder={dict.forms.yourName} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="owner-phone">{dict.forms.phoneWhatsapp}</Label>
          <Input id="owner-phone" type="tel" placeholder="+212 ..." required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="owner-city">{dict.forms.ownerCity}</Label>
          <Input id="owner-city" placeholder="Marrakech" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="owner-neighborhood">{dict.forms.ownerNeighborhood}</Label>
          <Input id="owner-neighborhood" placeholder="Hivernage, Gueliz, Palmeraie..." required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="owner-type">{dict.forms.ownerType}</Label>
          <select id="owner-type" className="h-12 rounded-2xl border border-border bg-white px-4 text-sm">
            <option>Apartment</option>
            <option>Villa</option>
            <option>Riad</option>
            <option>Commercial</option>
            <option>Land</option>
          </select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="owner-goal">{dict.forms.ownerGoal}</Label>
          <select id="owner-goal" className="h-12 rounded-2xl border border-border bg-white px-4 text-sm">
            <option>{dict.forms.ownerGoals.sell}</option>
            <option>{dict.forms.ownerGoals.let}</option>
            <option>{dict.forms.ownerGoals.valuation}</option>
          </select>
        </div>
        <div className="grid gap-2 md:col-span-2">
          <Label htmlFor="owner-message">{dict.forms.propertyDetails}</Label>
          <Textarea id="owner-message" placeholder="Surface, standing, titre, condition, expectations..." required />
        </div>
      </div>
      <Button type="submit" variant="accent" size="lg">
        {dict.forms.requestValuation}
      </Button>
    </form>
  );
}
