export default function GetInTouch() {
  return (
    <section className="relative flex items-center justify-center px-4 md:px-15">

      {/* Hidden semantic heading for SEO */}
      <h2 className="sr-only">Get In Touch</h2>

      <div className="relative w-full h-[275px] flex items-center justify-center">

        {/* GET IN */}
        <div className="absolute text-white text-[120px] font-bold top-2 md:top-2 left-4 md:left-12 z-20">
          GET IN
        </div>

        {/* TOUCH */}
        <div className="absolute text-[#444141] text-[175px] font-bold top-14 md:top-13 left-20 md:left-72 z-5">
          TOUCH
        </div>

      </div>

    </section>
  );
}
