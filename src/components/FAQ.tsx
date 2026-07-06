"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQItem } from "@/data/faq";

interface FAQProps {
  items: FAQItem[];
  showCategories?: boolean;
}

export function FAQ({ items, showCategories = false }: FAQProps) {
  const categories = showCategories
    ? [...new Set(items.map((i) => i.category))]
    : [null];

  return (
    <div className="space-y-8">
      {categories.map((cat) => {
        const catItems = cat ? items.filter((i) => i.category === cat) : items;
        const catLabels: Record<string, string> = {
          general: "General",
          classes: "Classes",
          enrollment: "Enrollment",
          facility: "Facility",
        };

        return (
          <div key={cat ?? "all"}>
            {cat && showCategories && (
              <h3 className="mb-4 font-heading text-xl font-bold text-flip-purple">
                {catLabels[cat]}
              </h3>
            )}
            <Accordion className="space-y-3">
              {catItems.map((item, i) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${cat}-${i}`}
                  className="rounded-2xl border border-border bg-card px-5 data-open:shadow-sm"
                >
                  <AccordionTrigger className="py-5 text-left font-heading font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        );
      })}
    </div>
  );
}
