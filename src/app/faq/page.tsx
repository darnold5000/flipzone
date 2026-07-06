import { BannerHero } from "@/components/BannerHero";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { faqs } from "@/data/faq";
import { images } from "@/lib/images";
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

      <BannerHero
        src={images.faqHero}
        alt="We're Here For You — have questions or ready to get started at The Flip Zone"
        width={1024}
        height={153}
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
