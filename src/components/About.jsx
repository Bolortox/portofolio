export const About = () => {
  return (
    <div className="bg-slate-50">
      <main className="container m-auto">
        <div className=" flex flex-col md:flex justify-center items-center  md:px-[80px] md:py-[96px] px-4 py-16 gap-4 ">
          {/* dund end  */}
          <div className="container m-auto flex gap-4 flex-col h-full  items-center md:items-stretch justify-center ">
            <div className="flex justify-center ">
              <div className="w-[105px] h-[28px] rounded-xl bg-slate-200 text-slate-600 flex justify-center ">
                About me
              </div>
            </div>
            {/* hoer hesegt huvaasan  */}
            <div className="  flex-col md:hidden flex justify-center items-center">
              <img
                src="./codingnyc.jpg"
                alt=""
                className="w-[280px] h-[360px]"
              />
            </div>
            <div className="flex justify-between gap-4">
              <div className=" max-w-[584px] w-full md:flex hidden items-center">
                <img
                  src="./codingnyc.jpg"
                  alt=""
                  className="w-[400px] h-[480px]"
                />
              </div>

              <div className="max-w-[584px] w-full  text-slate-600 text-base flex flex-col gap-[24px]">
                <p className="text-3xl text-black font-semibold ">
                  Curious about me? Here you have it:
                </p>
                <p>
                  I'm a designer turned full stack developer, passionate about
                  React.js and Node.js. I excel in blending technical and visual
                  aspects to craft exceptional digital products, prioritizing
                  user experience, precise design, and optimized code.
                </p>
                <p>
                  Since starting my web development journey in 2015, I've
                  embraced challenges and kept up with the latest tech trends.
                  Now in my early thirties, seven years in, I'm building
                  cutting-edge web apps using Next.js, TypeScript, Nestjs,
                  Tailwindcss, Supabase, and more.
                </p>
                <p>
                  With a progressive mindset, I enjoy the entire product
                  development process, from ideation to execution. Off duty,
                  you'll find me on Twitter, tracking startup journeys, or
                  unwinding. Follow me for tech insights and public project
                  updates on Twitter or GitHub.
                </p>
                <p>Finally, some quick bits about me.</p>
                <ul>
                  <li>• B.E. in Computer Engineering</li>
                  <li>• Avid learner</li>
                  <li>• Full time freelancer</li>
                </ul>
                <p>
                  One last thing, I'm available for freelance work, so feel free
                  to reach out and say hello! I promise I don't bite 😉
                </p>
              </div>
            </div>

            {/* end of big cont  */}
          </div>
        </div>
      </main>
    </div>
  );
};
