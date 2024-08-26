import { JavascriptIcon } from "./icons/icons";

export const Skillbox = ({ iconComponent, text }) => {
  return (
    <div className="w-[88px] h-[100px] flex flex-col items-center ">
      {iconComponent}
      <p>{text}</p>
    </div>
  );
};
