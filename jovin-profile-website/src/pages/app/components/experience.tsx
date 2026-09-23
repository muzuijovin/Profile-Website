export function ExperienceSection() {
  return (
    <>
      <div className="h-screen bg-primary-975 p-12">
        <div className="mb-16">
          <h3 className="font-label text-[#4FDBC8] text-xs">
            04 / TRAJECTORY ----
          </h3>
          <h1 className="font-bold font-headline text-4xl text-neutral-100 mt-3">
            Engineering Journey & Experience
          </h1>
        </div>

        <div className="bg-primary-950 h-max p-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-label font-semibold text-xs text-[#4FDBC8]">
                INCUBATOR PROGRAM
              </h3>
              <h1 className="font-headline font-semibold text-[28px] text-[#D6E3FF]">Fullstack Web Developer</h1>
              <h2 className="font-label text-[#4CD7F6] text-sm">Purwadhika Digital Technology School</h2>
            </div>

            <div className="flex gap-2">
              <img src="kalender-icon-experience.svg" alt="kalender" />
              <p className="font-label font-semibold text-xs text-[#BCC9CD]">Agustus 2026 - Desember 2026</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
