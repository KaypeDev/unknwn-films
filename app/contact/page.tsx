import GetInTouch from "@/components/contact/GetInTouch";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <main className="w-full max-w-[1440px] mx-auto px-13 py-16">

      {/* Page title for SEO */}
      <h1 className="sr-only">Contact</h1>

      <GetInTouch />

      <section className="flex flex-col md:flex-row items-start mt-13 md:mt-10 gap-13 md:gap-0">

        <div className="w-full md:w-1/2 order-2 md:order-1">
          <ContactInfo />
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <ContactForm />
        </div>

      </section>

    </main>
  );
}