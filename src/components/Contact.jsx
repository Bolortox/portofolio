import { FigmaIcon } from "./icons/icons";
import { BirdIcon } from "./svg/BirdIcon";
import { CatIcon } from "./svg/CatIcon";
import { CopyIcon } from "./svg/CopyIcon";
import { FigIcon } from "./svg/FigIcon";
import { MailIcon } from "./svg/MailIcon";
import { PhoneIcon } from "./svg/PhoneIcon";

export const Contact = () => {
  return (
    <div className="container max-w-[1440px] h-[560px] px-20 py-24 m-auto flex flex-col items-center justify-center gap-12">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <div className="h-[28px] w-[122px] text-sm  text-slate-600 bg-slate-200 flex justify-center rounded-xl items-center">
          Get in touch
        </div>
        <p className="text-slate-600 text-xl max-w-xl flex text-center">
          What's next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      {/* neg */}
      <div className=" flex flex-col gap-[18px]">
        <div className="flex text-4xl font-semibold gap-5">
          <MailIcon />
          <p>bolortox@gmail.com</p>
          <CopyIcon />
        </div>
        <div className="flex justify-center text-4xl font-semibold gap-5">
          <PhoneIcon />
          <p>+976 60490049</p>
          <CopyIcon />
        </div>
      </div>
      <div>
        <p className="text-base text-slate-600">
          You may also find me on these platforms!
        </p>
        <div className="flex justify-center">
          <CatIcon />
          <BirdIcon />
          <FigIcon />
        </div>
      </div>
    </div>
  );
};
