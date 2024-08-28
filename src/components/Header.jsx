import { HamburgerIcon } from "./svg/HamburgerIcon";
import { Navigation } from "./svg/Headertext";
import { SunIcon } from "./svg/SunIcon";
import { TomIcon } from "./svg/TomIcon";

export const Header = () => {
  return (
    <main className=" bg-[var(--background)] fixed justify-center w-full flex z-[1]">
      <div className=" flex justify-between container md:max-w-[1280px] md:py-4 md:px-8  ">
        <div className="w-full items-center flex ">
          <a href="#Hero">
            <p className="text-[var(--title)]">TOM</p>
          </a>
        </div>
        <div className=" flex justify-between ">
          <div className="flex justify-center items-center md:hidden">
            <HamburgerIcon />
          </div>
          <div className="gap-6 md:items-center hidden md:flex">
            <a href="#about" className="text-[var(--title)]">
              <Navigation text={"About"} />
            </a>

            <a className="text-[var(--title)]">
              <Navigation text={"Work"} />
            </a>

            <a className="text-[var(--title)]">
              <Navigation text={"Testimonials"} />
            </a>

            <a className="text-[var(--title)]">
              <Navigation text={"Contact"} />
            </a>

            <p className="text-slate-200	">|</p>
            <SunIcon />
            <button className=" w-[136px] h-[36px] bg-black  rounded-xl text-[var(--dark)]">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
