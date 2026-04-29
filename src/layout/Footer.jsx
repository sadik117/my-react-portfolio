import { useContext } from "react";
import logo from "../assets/logo.png";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";
import Snowfall from "react-snowfall";
import { ThemeContext } from "../AssetsContext";

const Footer = () => {
  const { snowFall } = useContext(ThemeContext);
  return (
    <div>
      <div className="">{snowFall && <Snowfall snowflakeCount={7} />}</div>
      <div className="bg-gradient-to-r mt-30 md:mt-32 w-10/12 mx-auto from-primary via-pColor to-primary h-[1px]"></div>
      <section className="w-10/12  z-10 py-5 md:py-10 mx-auto flex-col flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold">
          <Link
            to="/home"
            className="flex items-center flex-col md:text-2xl font-bold"
          >
            <img className="w-14 md:w-20 " src={logo} alt="logo" /> Developer Sadik
          </Link>
        </div>

        <div className="flex items-center py-2 md:py-5 gap-2">
          <a
            href="https://github.com/sadik117"
            target="_blank"
            className="md:text-xl hover:text-pColor duration-200"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/sadiksourov11"
            target="_blank"
            className="md:text-xl hover:text-pColor duration-200"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:sadiksourov@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you."
            target="_blank"
            className="md:text-xl hover:text-pColor duration-200"
          >
            <MdMail />
          </a>

          <a
            href="https://x.com/sadiksourov117"
            target="_blank"
            className="md:text-xl hover:text-pColor duration-200"
          >
            <FaTwitter />
          </a>

          <a
            href="https://t.me/sadiksourov11"
            target="_blank"
            className="md:text-xl hover:text-pColor duration-200"
          >
            <FaTelegram />
          </a>

          <a
            href="https://www.facebook.com/sadiksourov11/"
            target="_blank"
            className="md:text-xl hover:text-pColor duration-200"
          >
            <FaFacebook />
          </a>
        </div>
        <p className="text-xs md:text-sm text-center pt-3">
          Copyright © {new Date().getFullYear()} - All right reserved by Developer Sadik
        </p>
      </section>
    </div>
  );
};

export default Footer;
