import { PageHero } from "@/components/PageHero";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { faqs } from "@/data/faq";
import { createMetadata, faqSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: "FAQ | Gymnastics Classes Plainfield Indiana",
  description:
    "Frequently asked questions about gymnastics classes, enrollment, facility, birthday parties, and open gym at The Flip Zone in Plainfield, Indiana.",
  path: "/faq",
});

export default function FAQPage() {
  const schema = faqSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        seed="faq"
        title="Frequently Asked Questions"
        subtitle="Everything parents want to know before enrolling"
        size="medium"
        showButtons={false}
        align="center"
      />

      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <FAQ items={faqs} showCategories />
        </div>
      </section>

      <CTA
        title="Still Have Questions?"
        subtitle="Give us a call — we're happy to help you find the right class."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
