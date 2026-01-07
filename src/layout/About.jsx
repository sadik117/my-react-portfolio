import { useEffect } from "react";
import user from "../assets/user.jpeg";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import {
  MdMenuBook,
  MdOutlineFlightTakeoff,
  MdVideoLibrary,
} from "react-icons/md";
import { BiSolidGame } from "react-icons/bi";
import { PiCricketBold, PiMicrophoneStageFill } from "react-icons/pi";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { RiDownloadCloud2Line } from "react-icons/ri";
import resume from "../assets/Sadik_Sourov_Resume.pdf";
import { FaFileLines } from "react-icons/fa6";
import resumeImg from "../assets/resume-image.png";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { TfiWrite } from "react-icons/tfi";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-10/12 mx-auto pt-10 md:pt-20 mb-4 md:mb-0"
    >
      <Helmet>
        <title>About Me | Developer Sadik</title>
      </Helmet>
      <BackgroundBeamsWithCollision>
        <div className="flex w-full lg:flex-row flex-col gap-5 md:gap-10">
          <div className="lg:w-1/3 w-full flex items-center flex-col ">
            <div className="avatar h-max">
              <div className="mask bg-gradient-bg  mask-hexagon w-60 xl:w-96 md:w-80  pb-2 ">
                <div className="avatar">
                  <div className="mask mask-hexagon mt-2 bg-primary ml-2 w-60 xl:w-96 md:w-80">
                    <img src={user} />
                  </div>
                </div>
              </div>
            </div>

            <h1 className="gradient-text text-sm md:text-base font-bold flex items-center gap-2 pt-3">
              <div className="w-20 rotate-180 h-[1px] bg-gradient-bg relative">
                <div className="w-2 h-2 rounded-full -top-[3px] bg-base-300 absolute left-0" />
              </div>
              Code. Create. Inspire{" "}
            </h1>
          </div>
          <div className="lg:w-2/3 w-full">
            <h1 className="md:text-4xl text-2xl font-bold text-center md:text-left">
              About Me
            </h1>
            <h2 className="md:text-base text-sm font-semibold pt-5 md:pt-10">
              Hello,
            </h2>
            <h1 className="md:text-xl pt-1 md:pt-3 font-extrabold">
              I&apos;m <span className="gradient-text">Sadik</span>, a dedicated{" "}
              <span className="gradient-text">Fullstack Developer</span> with a
              passion for crafting responsive, engaging, and visually appealing
              web solutions. Currently pursuing a BSc. in Statistics at
              University of Rajshahi, I thrive on learning new technologies and
              tackling challenges.
            </h1>

            <h1 className="pt-3 md:pt-5 font-semibold md:text-base text-sm">
              My Tech Toolbox:
            </h1>
            <ul className="list-disc md:text-base text-sm list-inside py-2">
              <li className="">
                Frontend: HTML, CSS, Tailwind, JavaScript, TypeScript, React, Nextjs
              </li>
              <li className="">Backend: Node, Express, Prisma, Firebase, BetterAuth</li>
              <li className="">Databases: MongoDB, PostgreSQL</li>
            </ul>

            <h2 className="md:text-lg font-bold pt-3 md:pt-5 flex items-center gap-1">
              <MdMenuBook />
              My Story <div className="w-32 h-[1px] bg-neutral/50 ml-2"></div>
            </h2>
            <p className="md:py-3 py-1 md:text-base text-sm">
              My programming journey began in 2025. Before that, I had a little
              idea what programming was, and after admitting in varsity I often
              felt lost about my future. This uncertainty made fear inside me,
              as I struggled to find a clear path forward. Everything changed
              when a close younger brother introduced me an online web
              development course by{" "}
              <a
                target="_blank"
                href="https://www.programming-hero.com/"
                className="font-bold gradient-text"
              >
                Programming Hero.
              </a>
            </p>
            <p className="md:py-3 py-1 md:text-base text-sm">
              Starting this course marked a turning point in my life. Under the
              guidance of{" "}
              <span className="font-bold italic">Jhankar Mahbub</span>, the CEO
              of Programming Hero and an incredible mentor, I discovered my
              passion for web development. His engaging teaching style made
              learning enjoyable and effective. Over six months, I immersed
              myself in technologies like HTML, CSS, Tailwind CSS, JavaScript,
              React, Firebase, MongoDB, Node js and more, building a solid
              foundation in web development.
            </p>
            <p className="md:py-3 py-1 md:text-base text-sm">
              Today, I’m a confident and skilled Frontend Developer, ready to
              tackle creative projects and bring unique ideas to life. My
              ultimate goal is to excel as a freelancer or work remotely,
              contributing to impactful projects around the world. I have a deep
              appreciation for beautiful, functional design and strive to create
              user interfaces that are not just visually appealing but also
              deliver a seamless experience.
            </p>
            <p className="md:py-3 py-1 md:text-base text-sm">
              I’m passionate about incorporating modern tools, animations, and
              innovative packages to elevate the user experience. I believe
              every project is an opportunity to express creativity and push the
              boundaries of what&apos;s possible.
            </p>
            <p className="md:py-3 py-1 md:text-base text-sm">
              This journey has been transformative, and I’m excited to continue
              growing, learning, and contributing to the tech world.
            </p>

            <h2 className="md:text-lg font-bold md:pt-8 pt-5 flex items-center gap-1">
              <BiSolidGame />
              My Hobbies and Interest{" "}
              <div className="md:w-32 w-16 h-[1px] bg-neutral/50 ml-2"></div>
            </h2>
            <div className="flex items-center gap-3 lg:justify-between flex-wrap pt-5">
              <div className="flex flex-col items-center">
                <h1 className="bg-gradient-bg rounded-full p-[1px] w-max">
                  <PiCricketBold className="text-4xl p-1 bg-primary/70  rounded-full" />
                </h1>
                <h2 className="text-xs pt-1 md:text-sm font-semibold">
                  Cricket
                </h2>
              </div>

              <div className="flex flex-col items-center">
                <h1 className="bg-gradient-bg rounded-full p-[1px] w-max">
                  <MdOutlineFlightTakeoff className="text-4xl p-1 bg-primary/70  rounded-full" />
                </h1>
                <h2 className="text-xs pt-1 md:text-sm font-semibold">
                  Travelling
                </h2>
              </div>

              <div className="flex flex-col items-center">
                <h1 className="bg-gradient-bg rounded-full p-[1px] w-max">
                  <TfiWrite className="text-4xl p-1 bg-primary/70  rounded-full" />
                </h1>
                <h2 className="text-xs pt-1 md:text-sm font-semibold">
                  Writing
                </h2>
              </div>

              <div className="flex flex-col items-center">
                <h1 className="bg-gradient-bg rounded-full p-[1px] w-max">
                  <PiMicrophoneStageFill className="text-4xl p-1 bg-primary/70  rounded-full" />
                </h1>
                <h2 className="text-xs pt-1 md:text-sm font-semibold">
                  Singing
                </h2>
              </div>

              <div className="flex flex-col items-center">
                <h1 className="bg-gradient-bg rounded-full p-[1px] w-max">
                  <MdVideoLibrary className="text-4xl p-1 bg-primary/70  rounded-full" />
                </h1>
                <h2 className="text-xs pt-1 md:text-sm font-semibold">
                  Content
                </h2>
              </div>

              <div className="flex flex-col items-center">
                <h1 className="bg-gradient-bg rounded-full p-[1px] w-max">
                  <GiFullMotorcycleHelmet className="text-4xl p-1 bg-primary/70  rounded-full" />
                </h1>
                <h2 className="text-xs pt-1 md:text-sm font-semibold">
                  Riding
                </h2>
              </div>
            </div>

            <h2 className="md:text-lg font-bold pt-5 md:pt-8 flex items-center gap-1">
              <FaFileLines />
              My Resume <div className="w-32 h-[1px] bg-neutral/50 ml-2"></div>
            </h2>
            <div className="text-center w-max">
              <figure className="bg-gradient-bg w-max p-[1px] rounded-3xl mt-5">
                <img
                  src={resumeImg}
                  alt="resume image"
                  className="md:h-[600px] h-96  rounded-3xl bg-primary"
                />
              </figure>
              <a
                href={resume}
                download={true}
                className="btn mt-5  bg-transparent px-[2px] duration-300 hover:text-pColor py-[2px] explore-btn w-max rounded-full  h-max min-h-max  border-none hover:border-none"
              >
                <span className="bg-primary flex items-center gap-1 border-t border-[#8636ff]/50 md:px-6 px-4 text-xs md:text-[14px] py-2 md:py-3 rounded-full relative ">
                  Download Resume <RiDownloadCloud2Line />
                </span>
              </a>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </motion.div>
  );
};

export default About;
