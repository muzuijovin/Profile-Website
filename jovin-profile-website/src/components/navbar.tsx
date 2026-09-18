export function Navbar() {
  interface ButtonNavbar {
    label: string;
    tittle: string;
    url: string;
  }
  const buttonNavbar: ButtonNavbar[] = [
    {
      label: "about",
      tittle: "About",
      url: "/landing-page",
    },
    {
      label: "skills",
      tittle: "Skills",
      url: "/landing-page",
    },
    {
      label: "portofolio",
      tittle: "Portofolio",
      url: "/landing-page",
    },
    {
      label: "experience",
      tittle: "Experience",
      url: "/landing-page",
    },
    {
      label: "testimonials",
      tittle: "Testimonials",
      url: "/landing-page",
    },
    {
      label: "contact",
      tittle: "Contact",
      url: "/landing-page",
    },
  ];

  return (
    <>
      <div className="navbar flex justify-between bg-primary-975 pr-5 pl-5">
        <div className=" flex items-center gap-5 ">
          <span>
            <img src="" alt="logo" />
          </span>
          <div className="">
            <h1 className="font-headline text-xl text-neutral-100">
              Jovin Najwan
            </h1>
            <h2 className="font-label text-[#4FDBC8] font-semibold text-[11px]">
              FULL-STACK <br /> ARCHITECT
            </h2>
          </div>
        </div>
        <div className="flex gap-2">
          {buttonNavbar.map((menu) => {
            return (
              <button className="btn btn-info font-label">{menu?.label}</button>
            );
          })}
        </div>
        <div className="flex items-center gap-4 pl-2 pr-2">
          <div className="bg-primary-900 rounded-lg w-7 h-7 flex justify-center items-center cursor-pointer">
            <span>
              <img src="/Share-Icon.svg" alt="share" />
            </span>
          </div>

          <button className="btn btn-info font-label">Hire Me</button>

          <div className="rounded-lg w-8 h-8 cursor-pointer">
            <span className="block w-full h-full">
              <img src="/Profile.svg" alt="profile-photo" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
