import { Link } from "react-router-dom";
import { Spotlight } from "../components/ui/Spotlight";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const HomeLayout = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-white"
    >
      <Helmet>
        <title>Welcome Home || Sadik The Developer</title>
      </Helmet>

      {/* Spotlight Animation */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-80"
        fill="#dec8ff99"
      />

      {/* Hero Section */}
      <div className="md:h-[30rem] h-[24rem] w-full bg-primary bg-grid-gray-500/[0.2] relative flex items-center justify-center">
        {/* Radial Mask Overlay */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <h1 className="md:text-6xl text-4xl max-w-4xl px-4 mx-auto text-center font-bold flex flex-col items-center">
          Life doesn't get better by chance, it gets better by change.{" "}
          <span className="text-xs md:text-sm pt-5">
            (Jim Rohn : American Author & Motivational Speaker)
          </span>

          {/* CTA Button */}
          <Link
            to="/home"
            className="btn bg-transparent hover:text-pColor px-[2px] py-[2px] explore-btn rounded-full mt-16 md:mt-35 h-max min-h-max border-none hover:border-none"
          >
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="bg-primary text-xs md:text-[14px] py-2 md:py-3 flex items-center gap-1 border-t border-[#8636ff]/50 px-10 hover:px-16 duration-300 rounded-full relative"
            >
              Welcome Home <BsChevronDown />
            </motion.span>
          </Link>
        </h1>
      </div>
    </motion.main>
  );
};

export default HomeLayout;
