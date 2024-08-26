import { HamburgerIcon } from "./svg/HamburgerIcon";
import { Navigation } from "./svg/Headertext";
import { SunIcon } from "./svg/SunIcon";
import { TomIcon } from "./svg/TomIcon";

export const Header = () => {
  return (
    <main className=" bg-white fixed justify-center w-full flex z-[1]">
      <div className=" flex justify-between container md:px-[80px] md:py-4 p-4  ">
        <div className="w-full items-center flex ">
          <a href="#Hero">
            <TomIcon />
          </a>
        </div>
        <div className=" flex justify-between ">
          <div className="flex justify-center items-center md:hidden">
            <HamburgerIcon />
          </div>
          <div className="gap-6 md:items-center hidden md:flex">
            <a>
              <Navigation text={"About"} />
            </a>

            <a>
              <Navigation text={"Work"} />
            </a>

            <a>
              <Navigation text={"Testimonials"} />
            </a>

            <a>
              <Navigation text={"Contact"} />
            </a>

            <p className="text-slate-200	">|</p>
            <SunIcon />
            <button className=" w-[136px] h-[36px] bg-black text-white rounded-xl">
              {"Download CV"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
