import { RiDownloadCloud2Line, RiTailwindCssFill } from "react-icons/ri";
import userImg from "../assets/user.jpg";
import varsity from "../assets/varsity.webp";
import hsc from "../assets/hsc.webp";
import ssc from "../assets/ssc.webp";
import { Cover } from "../components/ui/cover";
import {
  FaFacebook,
  FaGitAlt,
  FaGithub,
  FaGraduationCap,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaNode,
  FaReact,
  FaSchool,
  FaShieldAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Meteors } from "../components/ui/Meteors";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { SparklesCore } from "../components/ui/sparkles";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../AssetsContext";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";
import { BiLogoFirebase, BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot, FaRegCircleDot } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import ProjectCart from "../components/ProjectCart";
import resume from "../assets/Sadik_Sourov_Resume.pdf";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { partical } = useContext(ThemeContext);
  const [result, setResult] = useState(null);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("project.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const mess = event.target.Message.value;
    if (mess.trim() === "") {
      return;
    }
    setResult("sending");

    formData.append("access_key", "946cb917-df86-472b-8ac2-a26436d772b1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(true);
      event.target.reset();
    } else {
      setResult(false);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-10/12 mx-auto py-5 "
    >
      <Helmet>
        <title>Home | Developer Sadik</title>
      </Helmet>
      <div className=" w-full bg-primary  bg-dot-gray-500/50  relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        {/* Banner */}
        <section className="flex  flex-col-reverse gap-4 lg:gap-0 lg:flex-row items-start justify-between relative">
          <div className="lg:w-2/4  lg:pt-20 flex flex-col justify-center ">
            <h1 className="md:text-2xl font-medium pb-2 ">
              Hi, I&apos;m Sadik
            </h1>
            <h1 className="text-2xl md:text-5xl pb-1 font-extrabold z-0">
              <Cover>
                <span className="gradient-text">
                  Professional Web Developer
                </span>
              </Cover>
            </h1>
            <p className="text-sm md:text-base py-2 md:py-3">
              With a deep-rooted enthusiasm for web development, I bring a
              results-driven mindset and a strong work ethic to every project. I
              thrive in fast-paced environments, confidently managing multiple
              responsibilities while maintaining high-quality outcomes. My
              curiosity and adaptability fuel a continuous drive to learn
              emerging technologies.
            </p>

            <ul className="flex gap-2 py-1 md:py-5">
              <li className="banner-list">
                <a href="https://github.com/sadik117" target="_blank">
                  <FaGithub className="banner-list-a" />
                </a>
              </li>

              <li className="banner-list">
                <a href="https://linkedin.com/in/sadiksourov11" target="_blank">
                  <FaLinkedin className="banner-list-a" />
                </a>
              </li>

              <li className="banner-list">
                <a
                  href="mailto:sadiksourov11@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you."
                  target="_blank"
                >
                  <MdMail className="banner-list-a" />
                </a>
              </li>

              <li className="banner-list">
                <a href="https://x.com/sadiksourov117" target="_blank">
                  <FaTwitter className="banner-list-a" />
                </a>
              </li>

              <li className="banner-list">
                <a
                  href="https://www.facebook.com/sadiksourov11/"
                  target="_blank"
                >
                  <FaFacebook className="banner-list-a" />
                </a>
              </li>
            </ul>

            <a
              href={resume}
              download={true}
              className="btn bg-transparent md:mt-0 mt-2 px-[2px] duration-300 hover:text-pColor py-[2px] explore-btn w-max rounded-full  h-max min-h-max  border-none hover:border-none"
            >
              <span className="bg-primary flex items-center gap-1 border-t border-[#8636ff]/50 md:px-6 px-4 text-xs md:text-[14px] py-2 md:py-3 rounded-full relative ">
                Download Resume <RiDownloadCloud2Line />
              </span>
            </a>
          </div>

          <div className="lg:w-2/4 relative  overflow-hidden">
            <Meteors number={2}></Meteors>
            <figure>
              <img
                src={userImg}
                alt="User Image"
                className="userLogo md:w-2/3 mx-auto"
              />
            </figure>
            <div>
              <h1 className="flex items-center  font-medium gap-2 rotate-90 bottom-5 -right-3 md:right-2 absolute origin-right">
                <span className="gradient-text text-xs md:text-base">
                  Code. Create. Inspire.
                </span>
                <span className="w-20 md:w-44 h-[1px] bg-gradient-bg rotate-180"></span>{" "}
              </h1>
            </div>
          </div>
        </section>
      </div>

      {/* About section */}
      <section className="lg:pt-32 pt-10 lg:px-20">
        <h1 className="md:text-3xl text-xl font-bold mx-auto gradient-text py-5">
          About Me
        </h1>
        <div className="flex md:flex-row flex-col items-center gap-3 md:gap-10">
          <div className="w-max flex justify-center">
            <div className="avatar ">
              <div className="mask bg-gradient-bg  mask-hexagon w-64 pb-2 ">
                <div className="avatar">
                  <div className="mask mask-hexagon mt-2 bg-primary ml-2 w-60">
                    <img src={userImg} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 font-medium">
            <h1 className="md:text-base text-sm">
              I&apos;m Sadik Sourov, a professional web developer. I have
              experience in various technologies including:
            </h1>
            <ul className="list-disc md:text-base text-sm list-inside py-3 md:py-5">
              <li className="">
                Frontend: HTML, CSS, Tailwind, JavaScript, TypeScript, React, Nextjs
              </li>
              <li className="">Backend: Node, Express, Prisma, Firebase, BetterAuth</li>
              <li className="">Databases: MongoDB, PostgreSQL</li>
            </ul>

            <p className="font-normal md:text-base text-sm">
              I provide a wide range of services including Frontend and Backend
              Development, Full Stack Development, App Development, Responsive
              Design, Error Resolution, Database Management, and Unit Testing.
              My core focus lies in transforming complex user needs into
              intuitive digital experiences through ethical and purposeful
              design — creating solutions that scale and foster meaningful
              connections across a global audience.
            </p>

            <Link
              to="/about"
              className="btn mt-2 md:mt-5 bg-transparent px-[2px] duration-300 hover:text-pColor py-[2px] explore-btn w-max rounded-full  h-max min-h-max  border-none hover:border-none"
            >
              <span className="bg-primary flex items-center gap-1 border-t border-[#8636ff]/50 md:px-6 px-4 text-xs md:text-[14px] py-2 md:py-3 rounded-full relative ">
                See More <GoArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Skill section */}
      <section className="lg:pt-32 pt-10 lg:px-20 text-center">
        <h1 className="md:text-3xl text-xl font-bold mx-auto gradient-text py-2 md:py-5">
          Skills
        </h1>
        <p className="lg:w-2/4 mx-auto text-xs md:text-sm">
          A reflection of my technical expertise and creative tools, this
          showcase represents my journey in mastering both technology and
          design. These skills are the foundation of my innovation, fueling
          inspired solutions and impactful results in every project I undertake.
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
      </section>

      {/* Education */}
      <section className="lg:pt-32 pt-10 lg:px-20 text-center">
        <h1 className="md:text-3xl text-xl  relative font-bold  gradient-text py-8">
          My Education Journey
          <div className="w-10 absolute h-1 md:h-2 bg-gradient-bg"></div>
        </h1>
        <section className="grid lg:grid-cols-1 gap-10 justify-items-center">
          <div className="w-full text-left ">
            <img
              className="w-full rounded-2xl h-60 lg:h-96 object-cover"
              src={varsity}
              alt="collage image"
            />
            <h2 className="my-3 w-max text-sm md:text-base rounded-full px-5 font-bold border border-pColor/50 gradient-text">
              Present
            </h2>
            <h1 className="flex items-center gap-1 text-lg md:text-xl font-semibold">
              <FaSchool />
              University of Rajshahi
            </h1>
            <p className="font-medium text-xs md:text-base py-2 flex items-center gap-1">
              <FaGraduationCap />
              B.Sc in Statistics
            </p>
            <p className="pb-3 text-sm md:text-base">
              Building a strong foundation in statistics and computer
              programming, with a focus on data analysis, algorithm development,
              and quantitative problem-solving. Actively engaging in tech clubs,
              coding and analytics competitions, and hands-on projects to
              enhance my technical proficiency and deepen my understanding of
              real-world data-driven solutions.
            </p>

            <h2 className="flex items-center gap-2 text-sm md:text-lg font-medium">
              <FaRegCircleDot />
              Coursework:{" "}
              <span className="font-normal text-xs md:text-base">
                Programming, Data Science
              </span>
            </h2>
            <h2 className="flex items-center my-1 gap-2 text-sm md:text-lg font-medium">
              <FaRegCircleDot />
              Activities:{" "}
            </h2>
            <ul className="list-disc list-inside md:pl-10">
              <li>
                <span className="font-normal text-xs md:text-base">
                  Member of the Tech Club
                </span>
              </li>
              <li>
                <span className="font-normal text-xs md:text-base">
                  Participated in Coding Competitions
                </span>
              </li>
              <li>
                <span className="font-normal text-xs md:text-base">
                  Developed small projects showcasing practical applications
                </span>
              </li>
            </ul>
          </div>

          <div className="w-full text-left">
            <img
              className="w-full rounded-2xl h-60 lg:h-80 object-cover"
              src={hsc}
              alt="college image"
            />
            <h2 className="my-3 w-max text-sm md:text-base rounded-full px-5 font-bold border border-pColor/50 gradient-text">
              2020 - 2022
            </h2>
            <h1 className="flex items-center gap-1 text-lg md:text-xl font-semibold">
              <FaSchool />
              Sundarganj Deed Writer (DW) Government College, Gaibandha
            </h1>
            <p className="font-medium text-xs md:text-base py-2 flex items-center gap-1">
              <FaGraduationCap />
              Higher Secondary Certificate (HSC)
            </p>

            <p className="pb-3 text-sm md:text-base">
              Dedicated to core science subjects, cultivating strong analytical
              thinking and a growing passion for technology. Engaged in science
              fairs and collaborative projects that encouraged teamwork,
              creativity, and innovative problem-solving.
            </p>

            <h2 className="flex items-center gap-2 text-sm md:text-lg font-medium">
              <FaRegCircleDot />
              Major:{" "}
              <span className="font-normal text-xs md:text-base">Science</span>
            </h2>
            <h2 className="flex items-center my-1 gap-2 text-sm md:text-lg font-medium">
              <FaRegCircleDot />
              Achievements:{" "}
            </h2>
            <ul className="list-disc list-inside md:pl-10">
              <li>
                <span className="font-normal text-xs md:text-base">
                  Secured good grades in core science subjects
                </span>
              </li>
              <li>
                <span className="font-normal text-xs md:text-base">
                  Actively participated in science fairs and group projects
                </span>
              </li>
            </ul>
          </div>

          <div className="w-full text-left">
            <img
              className="w-full rounded-2xl h-60 lg:h-80 object-cover"
              src={ssc}
              alt="school image"
            />
            <h2 className="my-3 w-max text-sm md:text-base rounded-full px-5 font-bold border border-pColor/50 gradient-text">
              2015 - 2023
            </h2>
            <h1 className="flex items-center gap-1 text-lg md:text-xl font-semibold">
              <FaSchool />
              Sundarganj Abdul Majid Govt. Boy's High School, Gaibandha
            </h1>
            <p className="font-medium text-xs md:text-base py-2 flex items-center gap-1">
              <FaGraduationCap />
              Secondary School Certificate (SSC)
            </p>

            <p className="pb-3 text-sm md:text-base">
              Focused on core science subjects and laying the groundwork for
              analytical thinking and a keen interest in technology. Actively
              participated in science fairs and group projects, which fostered
              collaboration, creativity, and a spirit of innovation from an
              early stage.
            </p>

            <h2 className="flex items-center gap-2 text-sm md:text-lg font-medium">
              <FaRegCircleDot />
              Major:{" "}
              <span className="font-normal text-xs md:text-base">Science</span>
            </h2>
            <h2 className="flex items-center my-1 gap-2 text-sm md:text-lg font-medium">
              <FaRegCircleDot />
              Achievements:{" "}
            </h2>
            <ul className="list-disc list-inside md:pl-10">
              <li>
                <span className="font-normal text-xs md:text-base">
                  Secured good grades in all other and core science subjects
                </span>
              </li>
              <li>
                <span className="font-normal text-xs md:text-base">
                  Actively participated in science fairs and quizes
                </span>
              </li>
            </ul>
          </div>
        </section>
      </section>

      {/* Projects section */}
      <section className="lg:pt-32 pt-10 relative z-0 lg:px-20 text-center">
        <h1 className="md:text-3xl text-xl  font-bold mx-auto gradient-text py-2 md:py-5">
          Projects
        </h1>
        <p className="lg:w-2/4 mx-auto text-xs md:text-sm">
          A curated showcase of my work that blends creativity with
          functionality—highlighting interactive designs, seamless development,
          and innovative solutions tailored to deliver impactful user
          experiences.
        </p>
        <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-3 md:gap-10 py-5 md:py-10 justify-items-center">
          {projects.map((project) => (
            <ProjectCart key={project.id} project={project} />
          ))}
        </section>
      </section>

      {/* Contact section */}
      <section className="lg:pt-28 pt-10 lg:px-20 text-center">
        <h1 className="md:text-3xl text-xl font-bold mx-auto gradient-text py-6 md:py-12">
          Contact Me With O Hesitation
        </h1>
        <section className="flex lg:flex-row flex-col items-center gap-10 md:gap-20">
          <div className="lg:w-2/4 text-left">
            <h1 className="gradient-text uppercase md:text-xl font-medium">
              Do you have any project to discuss?
            </h1>
            <h1 className="md:text-2xl text-xl py-2 md:py-3 font-bold">
              Let&apos;s Propagate Something Astonishing Together!
            </h1>
            <p className="md:text-base text-sm">
              Thanks for visiting! If you have any questions, ideas, or would
              like to collaborate, don&apos;t hesitate to get in touch. You can
              reach me using the contact details below or simply fill out the
              quick form to send a message directly. I&apos;m looking forward to
              connecting and creating something amazing together!
            </p>
            <h2 className="uppercase  font-medium md:text-xl pt-3 md:pt-5 pb-2 gradient-text">
              contact
            </h2>
            <ul className="text-sm md:text-base">
              <li className="">
                <a
                  href="https://www.google.com/maps/place/Sher-E-Bangla+Fazlul+Haque+Hall,+RU/@24.3669963,88.6368959,17z/data=!4m6!3m5!1s0x39fbf1706bcb3ee7:0x363863405d6eb2b7!8m2!3d24.3679208!4d88.6411386!16s%2Fg%2F11gmgw_gcn?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <FaLocationDot />
                  Binodpur, Rajshahi, Bangladesh
                </a>
              </li>
              <li className="">
                <a
                  href="tel:+8801717375585"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <BiSolidPhoneCall /> +8801717375585
                </a>
              </li>
              <li className="">
                <a
                  href="https://wa.me/8801717375585"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <FaWhatsapp /> +8801717375585
                </a>
              </li>
              <li className="">
                <a
                  href="mailto:sadiksourov11@gmail.com"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <MdMail /> sadiksourov11@gmail.com
                </a>
              </li>
            </ul>

            <h2 className="uppercase  font-medium md:text-xl pt-3 md:pt-5 pb-2 gradient-text">
              social
            </h2>
            <ul className="flex gap-2 ">
              <li className="banner-list">
                <a href="https://github.com/sadik117" target="_blank">
                  <FaGithub className="banner-list-a" />
                </a>
              </li>

              <li className="banner-list">
                <a href="https://linkedin.com/in/sadiksourov11" target="_blank">
                  <FaLinkedin className="banner-list-a" />
                </a>
              </li>

              <li className="banner-list">
                <a
                  href="mailto:sadiksourov@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you."
                  target="_blank"
                >
                  <MdMail className="banner-list-a" />
                </a>
              </li>

              <li className="banner-list">
                <a href="https://x.com/sadiksourov117" target="_blank">
                  <FaTwitter className="banner-list-a" />
                </a>
              </li>

              <li className="banner-list">
                <a
                  href="https://www.facebook.com/sadiksourov11/"
                  target="_blank"
                >
                  <FaFacebook className="banner-list-a" />
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:w-2/4 w-full flex flex-col items-start">
            <h1 className="text-lg font-semibold pb-5">Direct Message</h1>
            <div className="bg-gradient-bg rounded-xl w-full p-[1px]">
              <form
                onSubmit={onSubmit}
                className="bg-primary/80 rounded-xl p-3 md:p-7 text-left w-full"
              >
                <div className="flex flex-col gap-1 items-start">
                  <label className="font-semibold text-sm md:text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    required
                    placeholder="Enter your email"
                    className="w-full text-sm md:text-base bg-primary/50 focus:outline-none indent-2 p-2 rounded-xl"
                  />
                </div>

                <div className="flex flex-col gap-1 items-start pt-2">
                  <label className="font-semibold text-sm md:text-base">
                    Message
                  </label>
                  <textarea
                    name="Message"
                    type="text"
                    required
                    placeholder="Enter your message"
                    rows={5}
                    className="w-full text-sm md:text-base bg-primary/50 focus:outline-none indent-2 p-2 rounded-xl"
                  />
                </div>

                <button className="btn bg-gradient-bg text-primary mt-3 md:mt-5  min-h-max h-max  border-none rounded-full md:px-6 px-4 text-xs md:text-[14px] py-2 md:py-3">
                  Send <LuSend />
                </button>
                <h1
                  className={`font-medium pt-2 text-sm ${
                    result ? "gradient-text" : "text-red-500"
                  }`}
                >
                  {result === true && "Message sent!"}{" "}
                  {result === false && "Failed to send message"}{" "}
                  {result === "sending" && "Sending..."}
                </h1>
              </form>
            </div>
          </div>
        </section>
      </section>
    </motion.div>
  );
};

export default Home;
