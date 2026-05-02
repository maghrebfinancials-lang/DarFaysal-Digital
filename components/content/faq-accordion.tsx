import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { localize } from "@/lib/i18n";
import type { FAQItem, Locale } from "@/types";

export function FAQAccordion({ items, locale }: { items: FAQItem[]; locale: Locale }) {
  return (
    <Accordion type="single" collapsible className="grid gap-4">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{localize(locale, item.question)}</AccordionTrigger>
          <AccordionContent>{localize(locale, item.answer)}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
