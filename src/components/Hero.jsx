import { Bird, BirdIcon } from "./svg/BirdIcon";
import { CatIcon, Catt } from "./svg/CatIcon";
import { FigmaIcon } from "./svg/FigmaIcon";
import { GreenDot } from "./svg/GreenDot";
import { MapIcon } from "./svg/Mapicon";

export const Hero = () => {
  return (
    <main className="w-full container m-auto " id="Hero">
      <div className=" flex flex-col md:flex justify-center  m-auto h-full  md:px-[80px] md:py-[96px] px-4 py-16 ">
        <div className="md:flex justify-between items-center ">
          <div className="max-w-80 flex md:hidden items-center justify-center ">
            <img
              src="./portrait.jpg"
              alt=""
              className="w-[240px] h-[280px] border-8 border-white 
        "
            />
          </div>
          <div className="max-w-[600px]  flex-col">
            <div>
              <p className="text-6xl font-bold mt-24 md-[text-4xl]">
                Hi I'm Bolortogos 👋
              </p>
              <p className=" text-slate-600	mt-2">
                I specialize in full stack development, particularly with
                React.js and Node.js. My main goal is to create exceptional
                digital experiences that are fast, visually appealing, and
                accessible to everyone. With over 7 years of experience in web
                development, I continue to find joy in crafting innovative
                solutions and designs.
              </p>
            </div>

            <div className="flex-col  text-slate-600	mt-12 ">
              <div className="flex ">
                <MapIcon /> <p>Ulaanbaatar, Mongolia</p>
              </div>
              <div className="flex mt-2">
                <GreenDot /> <p>Available for new projects</p>
              </div>
            </div>
            <div className="flex mt-12">
              <CatIcon />
              <BirdIcon />
              <FigmaIcon />
            </div>
          </div>
          <div className="max-w-80 hidden md:flex justify-center items-center">
            <img
              src="./portrait.jpg"
              alt=""
              className="w-[280px] h-[320px] 
        "
            />
          </div>
        </div>
      </div>
    </main>
  );
};
