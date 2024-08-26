import { Skillbox } from "./Skillbox";
import {
  JavascriptIcon,
  TypeIcon,
  ReactIcon,
  NextjsIcon,
  NodeIcon,
  ExIcon,
  NestIcon,
  Socket,
  SocketIcon,
  ElephantIcon,
  LeafIcon,
  SasIcon,
  TailIcon,
  FigmaIcon,
  CypIcon,
  StoryIcon,
  GitIcon,
} from "./icons/icons";

export const Skills = () => {
  return (
    <div className=" m-auto w-full  flex items-center justify-center md:px-[80px] md:py-[96px] px-4 py-16 gap-4 ">
      <div className=" max-w-screen-2xl flex flex-col items-center text-gray-600 gap-y-12">
        <div className="gap-y-[16px] flex flex-col items-center">
          <div className="w-[75px] h-[28px] bg-slate-200 rounded-xl flex justify-center">
            Skills
          </div>
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
        <div className="grid  grid-cols-3 grid-rows-6 md:grid md:grid-cols-8 md:grid-rows-2 gap-[48px] ">
          <Skillbox iconComponent={<JavascriptIcon />} text={"Javascript"} />
          <Skillbox iconComponent={<TypeIcon />} text={"Typescript"} />
          <Skillbox iconComponent={<ReactIcon />} text={"React"} />
          <Skillbox iconComponent={<NextjsIcon />} text={"Next.js"} />
          <Skillbox iconComponent={<NodeIcon />} text={"Node.js"} />
          <Skillbox iconComponent={<ExIcon />} text={"Express.js"} />
          <Skillbox iconComponent={<NestIcon />} text={"Nest.js"} />
          <Skillbox iconComponent={<SocketIcon />} text={"Socket.io"} />
          <Skillbox iconComponent={<ElephantIcon />} text={"PostgreSQL"} />
          <Skillbox iconComponent={<LeafIcon />} text={"MongoDB"} />
          <Skillbox iconComponent={<SasIcon />} text={"Sass/Scss"} />
          <Skillbox iconComponent={<TailIcon />} text={"Tailwindcss"} />
          <Skillbox iconComponent={<FigmaIcon />} text={"Figma"} />
          <Skillbox iconComponent={<CypIcon />} text={"Cypress"} />
          <Skillbox iconComponent={<StoryIcon />} text={"Storybook"} />
          <Skillbox iconComponent={<GitIcon />} text={"Git"} />
        </div>
      </div>
    </div>
  );
};
