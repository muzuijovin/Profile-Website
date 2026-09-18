export function HeroSection() {
  return (
    <>
      <div id="heroSection" className="bg-primary-950 h-max">
        <div className="grid grid-cols-[55%_45%] pl-12 pr-12 pt-20 pb-20">
          <div>
            <p className="font-label text-xs text-[#4FDBC8]">👋 OPEN TO FULL-STACK OPPORTUNITIES | PURWADHIKA GRADUATE</p>
            <h1 className="font-headline font-extrabold text-5xl text-primary-100 mt-6">
              Engineering robust <span className="text-[#4FDBC8]">web</span> <span className="text-[#4FDBC8]">architectures</span> that empower businesses to
              scale.
            </h1>
            <h2 className="font-label text-md text-primary-50 mt-6">
              Hi, I'm Jovin Najwan — a Full-Stack Web Developer passionate about
              building high-performance, fault-tolerant web applications and
              seamless end-to-end digital solutions.
            </h2>

            <div className="flex gap-4 mt-6">
              <button className="btn btn-info font-label">
                VIEW PORTFOLIO{" "}
                <span>
                  <img src="/panah.svg" alt="row" />
                </span>
              </button>

              <button className="btn font-label bg-primary-900 hover:opacity-75 border-none text-primary-100">Contact Me <span><img src="/contact-me-icon.svg" alt="contactme" /></span></button>

            </div>
          </div>
        </div>

        <div>
          <span></span>
        </div>
      </div>
    </>
  );
}
