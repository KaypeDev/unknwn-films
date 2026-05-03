export default function ContactInfo() {
  return (
    <section className="w-full px-6 md:px-12">

      {/* Section title (important) */}
      <h2 className="sr-only">Contact Information</h2>

      {/* Instagram Row */}
      <div className="flex mx-auto flex-col items-start">
        <h3 className="text-[16px] font-semibold mb-1">Instagram</h3>

        <div className="flex flex-col">
          <a
            href="https://instagram.com/unknwn.films"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 transition font-regular text-[13px]"
          >
            unknwn.films
          </a>

          <a
            href="https://instagram.com/unknwn.weddingfilms"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 transition font-regular text-[13px]"
          >
            unknwn.weddingfilms
          </a>
        </div>
      </div>

      {/* Email Row */}
      <div className="flex flex-col items-start">
        <h3 className="text-[16px] font-semibold mb-1 pt-7">Email</h3>

        <a
          href="mailto:client@email.com"
          className="opacity-70 font-regular text-[13px]"
        >
          contact@unknwnfilms.com
        </a>
      </div>

    </section>
  );
}