import jovinLogo from "../../assets/logo-jovin-najwan-tema-laut.jpg";
import profileJovin from '../../assets/Profile.svg'

export function Navbar() {
  return [
    <>
      <div className="navbar flex bg-[#041329]">
        <div className="navbar-start">
          <div className="dropdown mr-3">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost md:hidden lg:hidden text-[#06B6D4]"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Skills</a>
              </li>
              <li>
                <a>Portofolio</a>
              </li>
              <li>
                <a>Experience</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-3">
            <span>
              <img
                src={jovinLogo}
                alt="logo"
                className="h-8 w-auto rounded-md cursor-pointer"
              />
            </span>
            <div>
              <div>
                <a className="cursor-pointer font-bold text-[20px] text-[#D6E3FF]">
                  Jovin Najwan
                </a>
              </div>
              <div>
                <a className="cursor-pointer text-[#4FDBC8]">
                  FULL-STACK <br /> ARCHITECT
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-center hidden md:grid md:grid-cols-3 md:gap-2 lg:flex gap-2">
          <button className="btn btn-info bg-[#06B6D4]">About</button>
          <button className="btn btn-info bg-[#06B6D4]">Skills</button>
          <button className="btn btn-info bg-[#06B6D4]">Portofolio</button>
          <button className="btn btn-info bg-[#06B6D4]">Experience</button>
          <button className="btn btn-info bg-[#06B6D4]">Testimonials</button>
          <button className="btn btn-info bg-[#06B6D4]">Contact</button>
        </div>

        <div className="navbar-end">
          <a className="cursor-pointer">
            <img src={profileJovin} alt="" />
          </a>
        </div>
      </div>
    </>,
  ];
}
