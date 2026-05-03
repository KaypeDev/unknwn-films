import GetInTouch from "@/components/contact/GetInTouch";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <main className="w-full max-w-[1440px] mx-auto px-30 py-16">

      {/* Page title for SEO */}
      <h1 className="sr-only">Contact</h1>

      <GetInTouch />

      <section className="flex flex-col md:flex-row items-start mt-10">

        {/* Left */}
        <div className="w-full md:w-1/2">
          <ContactInfo />
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>

      </section>

    </main>
  );
}