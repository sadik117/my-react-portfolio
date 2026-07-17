import { RiDownloadCloud2Line, RiTailwindCssFill } from "react-icons/ri";
import userImg from "../assets/user.jpg";
import varsity from "../assets/varsity.webp";
import hsc from "../assets/hsc.webp";
import ssc from "../assets/ssc.webp";
import { Cover } from "../components/ui/cover";
import {
    FaDocker,
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
    SiPython,
    SiRedis,
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

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    const fadeInUp = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const fadeInLeft = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const fadeInRight = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const scaleOnHover = {
        whileHover: { scale: 1.05, transition: { duration: 0.2 } },
        whileTap: { scale: 0.95 },
    };

    const skillItemVariants = {
        hidden: { scale: 0, opacity: 0, rotate: -10 },
        visible: (i) => ({
            scale: 1,
            opacity: 1,
            rotate: 0,
            transition: {
                delay: i * 0.05,
                type: "spring",
                stiffness: 200,
                damping: 15,
            },
        }),
    };

    const educationVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-10/12 mx-auto py-5 "
        >
            <Helmet>
                <title>Home || Developer Sadik</title>
            </Helmet>
            <div className=" w-full bg-dot-gray-500/50  relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

                {/* Banner */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row items-start justify-between relative"
                >
                    <motion.div variants={fadeInLeft} className="lg:w-2/4 lg:pt-20 flex flex-col justify-center ">
                        <motion.h1 variants={itemVariants} className="md:text-2xl font-medium pb-2 ">
                            Hi, I&apos;m Sadik
                        </motion.h1>
                        <motion.h1 variants={itemVariants} className="text-2xl md:text-5xl pb-1 font-extrabold z-0">
                            <Cover>
                                <span className="gradient-text">
                                    Professional Software Developer
                                </span>
                            </Cover>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-sm md:text-base py-2 md:py-3">
                            With a deep-rooted enthusiasm for web development, I bring a
                            results-driven mindset and a strong work ethic to every project. I
                            thrive in fast-paced environments, confidently managing multiple
                            responsibilities while maintaining high-quality outcomes. My
                            curiosity and adaptability fuel a continuous drive to learn
                            emerging technologies.
                        </motion.p>

                        <motion.ul variants={itemVariants} className="flex gap-2 py-1 md:py-5">
                            <motion.li whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="banner-list">
                                <a href="https://github.com/sadik117" target="_blank">
                                    <FaGithub className="banner-list-a" />
                                </a>
                            </motion.li>

                            <motion.li whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="banner-list">
                                <a href="https://linkedin.com/in/sadiksourov11" target="_blank">
                                    <FaLinkedin className="banner-list-a" />
                                </a>
                            </motion.li>

                            <motion.li whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="banner-list">
                                <a
                                    href="mailto:sadiksourov11@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you."
                                    target="_blank"
                                >
                                    <MdMail className="banner-list-a" />
                                </a>
                            </motion.li>

                            <motion.li whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="banner-list">
                                <a href="https://x.com/sadiksourov117" target="_blank">
                                    <FaTwitter className="banner-list-a" />
                                </a>
                            </motion.li>

                            <motion.li whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="banner-list">
                                <a
                                    href="https://www.facebook.com/sadiksourov11/"
                                    target="_blank"
                                >
                                    <FaFacebook className="banner-list-a" />
                                </a>
                            </motion.li>
                        </motion.ul>

                        <motion.a
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href={resume}
                            download={true}
                            className="btn bg-transparent md:mt-0 mt-2 px-[2px] duration-300 hover:text-pColor py-[2px] explore-btn w-max rounded-full  h-max min-h-max  border-none hover:border-none"
                        >
                            <span className="bg-primary flex items-center gap-1 border-t border-[#8636ff]/50 md:px-6 px-4 text-xs md:text-[14px] py-2 md:py-3 rounded-full relative ">
                                Download Resume <RiDownloadCloud2Line />
                            </span>
                        </motion.a>
                    </motion.div>

                    <motion.div
                        variants={fadeInRight}
                        className="lg:w-2/4 relative  overflow-hidden"
                    >
                        <Meteors number={2}></Meteors>
                        <motion.figure
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                        >
                            <img
                                src={userImg}
                                alt="User Image"
                                className="userLogo md:w-2/3 mx-auto"
                            />
                        </motion.figure>
                        <div>
                            <motion.h1 className="flex items-center  font-medium gap-2 rotate-90 bottom-5 -right-3 md:right-2 absolute origin-right">
                                <span className="gradient-text text-xs md:text-base">
                                    Code. Create. Inspire.
                                </span>
                                <span className="w-20 md:w-44 h-[1px] bg-gradient-bg rotate-180"></span>{" "}
                            </motion.h1>
                        </div>
                    </motion.div>
                </motion.section>
            </div>

            {/* About section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="lg:pt-20 pt-8 lg:px-20"
            >
                <motion.h1 variants={fadeInUp} className="md:text-3xl text-xl font-bold mx-auto gradient-text py-5">
                    About Me
                </motion.h1>
                <div className="flex md:flex-row flex-col items-center gap-3 md:gap-10">
                    <motion.div
                        variants={fadeInLeft}
                        whileHover={{ scale: 1.02 }}
                        className="w-max flex justify-center"
                    >
                        <div className="avatar ">
                            <div className="mask bg-gradient-bg  mask-hexagon w-64 pb-2 ">
                                <div className="avatar">
                                    <div className="mask mask-hexagon mt-2 bg-primary ml-2 w-60">
                                        <img src={userImg} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeInRight} className="flex-1 font-medium">
                        <motion.h1 variants={itemVariants} className="md:text-base text-sm">
                            I&apos;m Sadik Sourov, a professional software developer. I have
                            experience in various technologies including:
                        </motion.h1>
                        <motion.ul variants={itemVariants} className="list-disc md:text-base text-sm list-inside py-3 md:py-5">
                            <li>
                                Frontend: HTML, CSS, Tailwind CSS, JavaScript, TypeScript,
                                React, Nextjs, Shadcn UI, Zustand
                            </li>
                            <li>Backend: Node, Express, Prisma, Redis, Firebase, BetterAuth</li>
                            <li>Databases: MongoDB, PostgreSQL</li>
                            <li>DevOps & Tools: Docker, Git, GitHub</li>
                        </motion.ul>

                        <motion.p variants={itemVariants} className="font-normal md:text-base text-sm">
                            I provide a wide range of services including Frontend and Backend
                            Development, Full Stack Development, App Development, Responsive
                            Design, Error Resolution, Database Management, and Unit Testing.
                            My core focus lies in transforming complex user needs into
                            intuitive digital experiences through ethical and purposeful
                            design — creating solutions that scale and foster meaningful
                            connections across a global audience.
                        </motion.p>

                        <motion.div variants={itemVariants} whileHover={{ x: 5 }}>
                            <Link
                                to="/about"
                                className="btn mt-2 md:mt-5 bg-transparent px-[2px] duration-300 hover:text-pColor py-[2px] explore-btn w-max rounded-full  h-max min-h-max  border-none hover:border-none"
                            >
                                <span className="bg-primary flex items-center gap-1 border-t border-[#8636ff]/50 md:px-6 px-4 text-xs md:text-[14px] py-2 md:py-3 rounded-full relative ">
                                    See More <GoArrowRight />
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Skill section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="lg:pt-20 pt-10 lg:px-16 text-center"
            >
                <motion.h1 variants={fadeInUp} className="md:text-3xl text-xl font-bold mx-auto gradient-text py-2 md:py-5">
                    Skills
                </motion.h1>
                <motion.p variants={fadeInUp} className="lg:w-2/4 mx-auto text-xs md:text-sm">
                    A reflection of my technical expertise and creative tools, this
                    showcase represents my journey in mastering both technology and
                    design. These skills are the foundation of my innovation, fueling
                    inspired solutions and impactful results in every project I undertake.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="h-[12rem] mt-2 w-full flex flex-col items-center justify-center overflow-hidden rounded-md"
                >
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
                </motion.div>
                <motion.section
                    variants={containerVariants}
                    className="mx-auto justify-items-center md:pt-10 gap-3 md:gap-16 lg:w-5/12 grid md:grid-cols-4 grid-cols-3"
                >
                    {[
                        { title: "HTML", Icon: FaHtml5, color: "#E34F26", name: "HTML" },
                        { title: "Tailwind CSS", Icon: RiTailwindCssFill, color: "#38BDF8", name: "Tailwind" },
                        { title: "JavaScript", Icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
                        { title: "TypeScript", Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
                        { title: "Python", Icon: SiPython, color: "#80eb34", name: "Python" },
                        { title: "React", Icon: FaReact, color: "#61DAFB", name: "React" },
                        { title: "Next.js", Icon: SiNextdotjs, color: "gray", name: "Next.js", customColor: true },
                        { title: "Node JS", Icon: FaNode, color: "#339933", name: "Node JS" },
                        { title: "Express.js", Icon: SiExpress, color: "gray", name: "Express.js", customColor: true },
                        { title: "Firebase", Icon: BiLogoFirebase, color: "#FFA000", name: "Firebase" },
                        { title: "MongoDB", Icon: SiMongodb, color: "#47A248", name: "MongoBD" },
                        { title: "PostgreSQL", Icon: SiPostgresql, color: "#336791", name: "PostgreSQL" },
                        { title: "Redis", Icon: SiRedis, color: "#DC382D", name: "Redis" },
                        { title: "Prisma", Icon: SiPrisma, color: "#2D3748", name: "Prisma", customColor: true },
                        { title: "Docker", Icon: FaDocker, color: "#2496ED", name: "Docker" },
                        { title: "GitHub", Icon: FaGitAlt, color: "#F05033", name: "Github" },
                        { title: "BetterAuth", Icon: FaShieldAlt, color: "#10B981", name: "BetterAuth" },
                    ].map((skill, index) => (
                        <motion.section
                            key={skill.title}
                            custom={index}
                            variants={skillItemVariants}
                            whileHover={{ y: -5, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div
                                title={skill.title}
                                className={`text-[${skill.color}] p-[2px] w-20 h-20 before:bg-gradient-to-r from-[${skill.color}] to-[${skill.color}] skill rounded-2xl md:scale-100 scale-75`}
                                style={{ color: skill.color }}
                            >
                                <skill.Icon className="bg-primary relative w-full rounded-2xl h-full p-5" />
                            </div>
                            <h2 className={`text-center text-sm md:text-base font-semibold pt-2 ${!skill.customColor ? `text-[${skill.color}]` : ""}`} style={!skill.customColor ? { color: skill.color } : {}}>
                                {skill.name}
                            </h2>
                        </motion.section>
                    ))}
                </motion.section>
            </motion.section>

            {/* Projects section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="lg:pt-20 pt-10 relative z-0 lg:px-20 text-center"
            >
                <motion.h1 variants={fadeInUp} className="md:text-3xl text-xl  font-bold mx-auto gradient-text py-2 md:py-5">
                    Projects
                </motion.h1>
                <motion.p variants={fadeInUp} className="lg:w-2/4 mx-auto text-xs md:text-sm">
                    A curated showcase of my work that blends creativity with
                    functionality—highlighting interactive designs, seamless development,
                    and innovative solutions tailored to deliver impactful user
                    experiences.
                </motion.p>
                <motion.section
                    variants={containerVariants}
                    className="grid md:grid-cols-1 lg:grid-cols-2 gap-3 md:gap-10 py-5 md:py-10 justify-items-center"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={fadeInUp}
                            custom={index}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ProjectCart project={project} />
                        </motion.div>
                    ))}
                </motion.section>
            </motion.section>

            {/* Education */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="lg:pt-20 pt-8 lg:px-20 text-center"
            >
                <motion.h1 variants={fadeInUp} className="md:text-3xl text-xl  relative font-bold  gradient-text py-8">
                    My Education Journey
                    <div className="w-10 absolute h-1 md:h-2 bg-gradient-bg"></div>
                </motion.h1>
                <section className="grid lg:grid-cols-1 gap-10 justify-items-center">
                    {[
                        {
                            img: varsity,
                            period: "Present",
                            title: "University of Rajshahi",
                            degree: "B.Sc in Statistics and Data Science",
                            description: "Building a strong foundation in statistics and computer programming, with a focus on data analysis, algorithm development, and quantitative problem-solving. Actively engaging in tech clubs, coding and analytics competitions, and hands-on projects to enhance my technical proficiency and deepen my understanding of real-world data-driven solutions.",
                            coursework: "Programming, Data Science, Statistics",
                            activities: [
                                "Member of the Tech Data Science and Machine Learning Club",
                                "Participated in Coding and Data Science Competitions",
                                "Developed small projects showcasing practical applications"
                            ]
                        },
                        {
                            img: hsc,
                            period: "2020 - 2022",
                            title: "Sundarganj Deed Writer (DW) Government College, Gaibandha",
                            degree: "Higher Secondary Certificate (HSC)",
                            description: "Dedicated to core science subjects, cultivating strong analytical thinking and a growing passion for technology. Engaged in science fairs and collaborative projects that encouraged teamwork, creativity, and innovative problem-solving.",
                            coursework: "Science",
                            activities: [
                                "Secured good grades in core science subjects",
                                "Actively participated in science fairs and group projects"
                            ]
                        },
                        {
                            img: ssc,
                            period: "2015 - 2020",
                            title: "Sundarganj Abdul Majid Govt. Boy's High School, Gaibandha",
                            degree: "Secondary School Certificate (SSC)",
                            description: "Focused on core science subjects and laying the groundwork for analytical thinking and a keen interest in technology. Actively participated in science fairs and group projects, which fostered collaboration, creativity, and a spirit of innovation from an early stage.",
                            coursework: "Science",
                            activities: [
                                "Secured good grades in all other and core science subjects",
                                "Actively participated in science fairs and quizes"
                            ]
                        }
                    ].map((edu, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={educationVariants}
                            whileHover={{ y: -5 }}
                            className="w-full text-left"
                        >
                            <motion.img
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="w-full rounded-2xl h-60 lg:h-96 object-cover"
                                src={edu.img}
                                alt="education image"
                            />
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="my-3 w-max text-sm md:text-base rounded-full px-5 font-bold border border-pColor/50 gradient-text"
                            >
                                {edu.period}
                            </motion.h2>
                            <h1 className="flex items-center gap-1 text-lg md:text-xl font-semibold">
                                <FaSchool />
                                {edu.title}
                            </h1>
                            <p className="font-medium text-xs md:text-base py-2 flex items-center gap-1">
                                <FaGraduationCap />
                                {edu.degree}
                            </p>
                            <p className="pb-3 text-sm md:text-base">
                                {edu.description}
                            </p>

                            <h2 className="flex items-center gap-2 text-sm md:text-lg font-medium">
                                <FaRegCircleDot />
                                Coursework:{" "}
                                <span className="font-normal text-xs md:text-base">{edu.coursework}</span>
                            </h2>
                            <h2 className="flex items-center my-1 gap-2 text-sm md:text-lg font-medium">
                                <FaRegCircleDot />
                                Activities:{" "}
                            </h2>
                            <ul className="list-disc list-inside md:pl-10">
                                {edu.activities.map((activity, idx) => (
                                    <li key={idx}>
                                        <span className="font-normal text-xs md:text-base">{activity}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </section>
            </motion.section>

            {/* Contact section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="lg:pt-20 pt-8 lg:px-20 text-center"
            >
                <motion.h1 variants={fadeInUp} className="md:text-3xl text-xl font-bold mx-auto gradient-text py-6 md:py-12">
                    Contact Me
                </motion.h1>
                <section className="flex lg:flex-row flex-col items-center gap-10 md:gap-20">
                    <motion.div variants={fadeInLeft} className="lg:w-2/4 text-left">
                        <motion.h1 variants={itemVariants} className="gradient-text uppercase md:text-xl font-medium">
                            Do you have any project to discuss?
                        </motion.h1>
                        <motion.h1 variants={itemVariants} className="md:text-2xl text-xl py-2 md:py-3 font-bold">
                            Let&apos;s Propagate Something Astonishing Together!
                        </motion.h1>
                        <motion.p variants={itemVariants} className="md:text-base text-sm">
                            Thanks for visiting! If you have any questions, ideas, or would
                            like to collaborate, don&apos;t hesitate to get in touch. You can
                            reach me using the contact details below or simply fill out the
                            quick form to send a message directly. I&apos;m looking forward to
                            connecting and creating something amazing together!
                        </motion.p>
                        <motion.h2 variants={itemVariants} className="uppercase  font-medium md:text-xl pt-3 md:pt-5 pb-2 gradient-text">
                            contact
                        </motion.h2>
                        <motion.ul variants={itemVariants} className="text-sm md:text-base">
                            <motion.li whileHover={{ x: 5 }} className="">
                                <a
                                    href="https://www.google.com/maps/place/Sher-E-Bangla+Fazlul+Haque+Hall,+RU/@24.3669963,88.6368959,17z/data=!4m6!3m5!1s0x39fbf1706bcb3ee7:0x363863405d6eb2b7!8m2!3d24.3679208!4d88.6411386!16s%2Fg%2F11gmgw_gcn?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    <FaLocationDot />
                                    Binodpur, Rajshahi, Bangladesh
                                </a>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }} className="">
                                <a
                                    href="tel:+8801717375585"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    <BiSolidPhoneCall /> +8801717375585
                                </a>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }} className="">
                                <a
                                    href="https://wa.me/8801717375585"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    <FaWhatsapp /> +8801717375585
                                </a>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }} className="">
                                <a
                                    href="mailto:sadiksourov11@gmail.com"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    <MdMail /> sadiksourov11@gmail.com
                                </a>
                            </motion.li>
                        </motion.ul>

                        <motion.h2 variants={itemVariants} className="uppercase  font-medium md:text-xl pt-3 md:pt-5 pb-2 gradient-text">
                            social
                        </motion.h2>
                        <motion.ul variants={itemVariants} className="flex gap-2 ">
                            <motion.li whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="banner-list">
                                <a href="https://github.com/sadik117" target="_blank">
                                    <FaGithub className="banner-list-a" />
                                </a>
                            </motion.li>

                            <motion.li whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="banner-list">
                                <a href="https://linkedin.com/in/sadiksourov11" target="_blank">
                                    <FaLinkedin className="banner-list-a" />
                                </a>
                            </motion.li>

                            <motion.li whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="banner-list">
                                <a
                                    href="mailto:sadiksourov@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you."
                                    target="_blank"
                                >
                                    <MdMail className="banner-list-a" />
                                </a>
                            </motion.li>

                            <motion.li whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="banner-list">
                                <a href="https://x.com/sadiksourov117" target="_blank">
                                    <FaTwitter className="banner-list-a" />
                                </a>
                            </motion.li>

                            <motion.li whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="banner-list">
                                <a
                                    href="https://www.facebook.com/sadiksourov11/"
                                    target="_blank"
                                >
                                    <FaFacebook className="banner-list-a" />
                                </a>
                            </motion.li>
                        </motion.ul>
                    </motion.div>

                    <motion.div variants={fadeInRight} className="lg:w-2/4 w-full flex flex-col items-start">
                        <motion.h1 variants={itemVariants} className="text-lg font-semibold pb-5">Direct Message</motion.h1>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-gradient-bg rounded-xl w-full p-[1px]"
                        >
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

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn bg-gradient-bg text-primary mt-3 md:mt-5  min-h-max h-max  border-none rounded-full md:px-6 px-4 text-xs md:text-[14px] py-2 md:py-3"
                                >
                                    Send <LuSend />
                                </motion.button>
                                <motion.h1
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className={`font-medium pt-2 text-sm ${result ? "gradient-text" : "text-red-500"
                                        }`}
                                >
                                    {result === true && "Message sent!"}{" "}
                                    {result === false && "Failed to send message"}{" "}
                                    {result === "sending" && "Sending..."}
                                </motion.h1>
                            </form>
                        </motion.div>
                    </motion.div>
                </section>
            </motion.section>
        </motion.div>
    );
};

export default Home;