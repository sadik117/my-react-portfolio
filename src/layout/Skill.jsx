import {
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNode,
  FaReact,
  FaShieldAlt,
} from "react-icons/fa";
import { SparklesCore } from "../components/ui/sparkles";

import { RiTailwindCssFill } from "react-icons/ri";

import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";
import { BiLogoFirebase } from "react-icons/bi";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../AssetsContext";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const Skill = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { partical } = useContext(ThemeContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="md:pt-20 pt-10 w-10/12 mx-auto text-center"
    >
      <Helmet>
        <title>My Skills | Developer Sadik</title>
      </Helmet>
      <h1 className="text-2xl md:text-4xl font-bold">Skills That Define Me</h1>
      <p className="lg:w-2/5 mx-auto pt-1 text-xs md:text-sm">
        A showcase of my expertise and tools of the trade, reflecting my journey
        in mastering technology and design. These skills drive my creativity and
        innovation in every project.
      </p>
      <div className="h-[12rem] w-full bg-primary flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor={partical ? "#ffffff" : "#000000"}
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-primary [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <section className="mx-auto justify-items-center md:pt-10 gap-3 md:gap-16 lg:w-5/12 grid md:grid-cols-4 grid-cols-3">
        <section>
          <div
            title="HTML"
            className="text-[#E34F26] p-[2px] w-20 h-20 before:bg-gradient-to-r from-[#E34F26] to-[#e34f26]  skill rounded-2xl md:scale-100 scale-75"
          >
            <FaHtml5 className="bg-primary  relative w-full rounded-2xl  h-full p-5" />
          </div>
          <h2 className="text-center text-sm md:text-base font-semibold text-[#e34f26] pt-2">
            HTML
          </h2>
        </section>

        <section>
          <div
            title="Tailwind CSS"
            className="text-[#38BDF8] p-[2px] w-20 h-20  before:bg-gradient-to-r from-[#38BDF8] to-[#38BDF8]  skill rounded-2xl  md:scale-100 scale-75"
          >
            <RiTailwindCssFill className="bg-primary relative w-full rounded-2xl  h-full p-5" />
          </div>
          <h2 className="text-center text-sm md:text-base font-semibold text-[#38BDF8] pt-2">
            Tailwind
          </h2>
        </section>

        <section>
          <div
            title="JavaScript"
            className="text-[#F7DF1E] p-[2px] w-20 h-20 before:bg-gradient-to-r from-[#F7DF1E] to-[#F7DF1E]  skill rounded-2xl  md:scale-100 scale-75"
          >
            <FaJs className="bg-primary relative w-full rounded-2xl  h-full p-5" />
          </div>
          <h2 className="text-center text-sm md:text-base font-semibold text-[#F7DF1E] pt-2">
            JavaScript
          </h2>
        </section>

        <section>
          <div
            title="TypeScript"
            className="text-[#3178C6] p-[2px] w-20 h-20 before:bg-gradient-to-r from-[#3178C6] to-[#3178C6] skill rounded-2xl md:scale-100 scale-75"
          >
            <SiTypescript className="bg-primary relative w-full rounded-2xl h-full p-5" />
          </div>
          <h2 className="text-center text-sm md:text-base font-semibold text-[#3178C6] pt-2">
            TypeScript
          </h2>
        </section>

        <section>
          <div
            title="React"
            className="text-[#61DAFB] p-[2px] w-20 h-20 before:bg-gradient-to-r from-[#61DAFB] to-[#61DAFB]  skill rounded-2xl  md:scale-100 scale-75"
          >
            <FaReact className="bg-primary relative w-full rounded-2xl  h-full p-5" />
          </div>
          <h2 className="text-center text-sm md:text-base font-semibold text-[#61DAFB] pt-2">
            React
          </h2>
        </section>

        <section>
          <div
            title="Next.js"
            className="dark:text-black p-[2px] w-20 h-20 before:bg-gradient-to-r from-gray-200 to-gray-400 skill rounded-2xl md:scale-100 scale-75"
          >
            <SiNextdotjs className="bg-primary relative w-full rounded-2xl h-full p-5" />
          </div>
          <h2 className="text-center text-sm md:text-base font-semibold pt-2">
            Next.js
          </h2>
        </section>

        <section>
          <div
            title="Node JS"
            className="text-[#339933] p-[2px] w-20 h-20 before:bg-gradient-to-r from-[#339933] to-[#339933]  skill rounded-2xl  md:scale-100 scale-75"
          >
            <FaNode className="bg-primary relative w-full rounded-2xl  h-full p-5" />
          </div>

          <h2 className="text-center text-sm md:text-base font-semibold text-[#339933] pt-2">
            Node JS
          </h2>
        </section>

        <section>
          <div
            title="Express.js"
            className="text-gray-800 dark:text-gray-200 p-[2px] w-20 h-20 
    before:bg-gradient-to-r from-gray-500 to-gray-700 
    skill rounded-2xl md:scale-100 scale-75"
          >
            <SiExpress className="bg-primary relative w-full rounded-2xl h-full p-5" />
          </div>
          <h2 className="text-center text-sm md:text-base font-semibold pt-2">
            Express.js
          </h2>
        </section>

        <section>
          <div
            title="Firebase"
            className="text-[#FFA000] p-[2px] w-20 h-20 before:bg-gradient-to-r from-[#FFA000] to-[#FFA000]  skill rounded-2xl  md:scale-100 scale-75"
          >
            <BiLogoFirebase className="bg-primary relative w-full rounded-2xl  h-full p-5" />
          </div>
          <h2 className="text-center text-sm md:text-base font-semibold text-[#FFA000] pt-2">
            Firebase
          </h2>
        </section>

        <section>
          <div
            title="MongoDB"
            className="text-[#47A248] p-[2px] w-20 h-20 before:bg-gradient-to-r from-[#47A248] to-[#47A248]  skill rounded-2xl  md:scale-100 scale-75"
          >
            <SiMongodb className="bg-primary relative w-full rounded-2xl  h-full p-5" />
          </div>
          <h2 className="text-center text-sm md:text-base font-semibold text-[#47A248] pt-2">
            MongoBD
          </h2>
        </section>

        <section>
          <div
            title="PostgreSQL"
            className="text-[#336791] p-[2px] w-20 h-20 before:bg-gradient-to-r from-[#336791] to-[#336791] skill rounded-2xl md:scale-100 scale-75"
          >
            <SiPostgresql className="bg-primary relative w-full rounded-2xl h-full p-5" />
          </div>
          <h2 className="text-center text-sm md:text-base font-semibold text-[#336791] pt-2">
            PostgreSQL
          </h2>
        </section>

        <section>
          <div
            title="Prisma"
            className="text-[#2D3748] dark:text-white p-[2px] w-20 h-20 before:bg-gradient-to-r from-[#2D3748] to-[#4A5568] skill rounded-2xl md:scale-100 scale-75"
          >
            <SiPrisma className="bg-primary relative w-full rounded-2xl h-full p-5" />
          </div>
          <h2 className="text-center text-sm md:text-base font-semibold pt-2">
            Prisma
          </h2>
        </section>

        <section>
          <div
            title="GitHub"
            className="text-[#F05033] p-[2px] w-20 h-20 before:bg-gradient-to-r from-[#F05033] to-[#F05033]  skill rounded-2xl   md:scale-100 scale-75"
          >
            <FaGitAlt className="bg-primary relative w-full rounded-2xl  h-full p-5" />
          </div>
          <h2 className="text-center text-sm md:text-base font-semibold text-[#F05033] pt-2">
            Github
          </h2>
        </section>

        <section>
          <div
            title="BetterAuth"
            className="text-[#10B981] p-[2px] w-20 h-20 before:bg-gradient-to-r from-[#10B981] to-[#059669] skill rounded-2xl md:scale-100 scale-75"
          >
            <FaShieldAlt className="bg-primary relative w-full rounded-2xl h-full p-5" />
          </div>
          <h2 className="text-center text-sm md:text-base font-semibold text-[#10B981] pt-2">
            BetterAuth
          </h2>
        </section>
      </section>
    </motion.div>
  );
};

export default Skill;
