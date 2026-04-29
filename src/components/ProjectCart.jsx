import { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GoArrowRight, GoLinkExternal } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

/* ── physics spring config ── */
const SPRING = { stiffness: 300, damping: 22, mass: 0.8 };
const SLOW   = { stiffness: 140, damping: 18 };

/* ── card entrance variant (used by parent stagger) ── */
export const cardVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 22 },
  },
};

const ProjectCart = ({ project }) => {
  const { name, image, liveLink, id, githubRepo } = project;
  const navigate = useNavigate();
  const cardRef = useRef(null);

  /* ── raw mouse position relative to card center ── */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  /* ── spring-smoothed tilt ── */
  const springX = useSpring(rawX, SLOW);
  const springY = useSpring(rawY, SLOW);

  /* ── map tilt: -12° → +12° ── */
  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);

  /* ── glow position for spotlight effect ── */
  const glowX = useTransform(springX, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(springY, [-0.5, 0.5], ["0%", "100%"]);

  /* ── spring Y lift on hover ── */
  const liftY = useSpring(0, SPRING);
  const shadow = useSpring(0, SPRING);

  /* ── image scale on hover ── */
  const [imgHovered, setImgHovered] = useState(false);

  /* ── lens state ── */
  const [lens, setLens] = useState({ x: 0, y: 0, show: false });
  const imgRef = useRef(null);

  const onMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;   // -0.5 → +0.5
    const ny = (e.clientY - rect.top)  / rect.height - 0.5;
    rawX.set(nx);
    rawY.set(ny);
  };

  const onMouseEnter = () => {
    liftY.set(-10);
    shadow.set(1);
  };

  const onMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    liftY.set(0);
    shadow.set(0);
    setLens({ ...lens, show: false });
  };

  /* lens follows cursor inside image */
  const onImgMove = (e) => {
    const rect = imgRef.current?.getBoundingClientRect();
    if (!rect) return;
    setLens({ x: e.clientX - rect.left, y: e.clientY - rect.top, show: true });
  };

  const boxShadow = useTransform(
    shadow,
    [0, 1],
    [
      "0 4px 20px rgba(134,54,255,0.15)",
      "0 24px 60px rgba(134,54,255,0.45), 0 8px 30px rgba(252,47,152,0.25)",
    ]
  );

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariant}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        y: liftY,
        boxShadow,
        transformStyle: "preserve-3d",
        transformPerspective: 900,
        borderRadius: "1rem",
        willChange: "transform",
        position: "relative",
      }}
      className="w-full"
    >
      {/* ── glowing spotlight that follows cursor ── */}
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "1rem",
          pointerEvents: "none",
          zIndex: 1,
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) =>
              `radial-gradient(280px circle at ${gx} ${gy}, rgba(134,54,255,0.12), transparent 70%)`
          ),
        }}
      />

      {/* Project name */}
      <h1 className="md:text-lg text-left px-5 font-bold p-3 relative z-10">
        {name}
      </h1>

      {/* Image with lens effect */}
      <figure
        className="bg-gradient-bg rounded-2xl shadow-lg p-[1px] relative overflow-hidden z-10"
        style={{ cursor: "pointer" }}
      >
        <div
          ref={imgRef}
          className="relative overflow-hidden rounded-2xl"
          onMouseMove={onImgMove}
          onMouseEnter={() => setImgHovered(true)}
          onMouseLeave={() => { setImgHovered(false); setLens({ ...lens, show: false }); }}
        >
          <motion.img
            onClick={() => navigate(`/projects/${id}`)}
            animate={{ scale: imgHovered ? 1.06 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-full rounded-2xl h-34 md:h-62 object-cover"
            src={image}
            alt="Project Image"
            style={{ display: "block" }}
          />

          {/* lens circle */}
          {lens.show && (
            <div
              style={{
                position: "absolute",
                left: lens.x,
                top: lens.y,
                width: 110,
                height: 110,
                transform: "translate(-50%,-50%)",
                borderRadius: "50%",
                border: "2px solid rgba(134,54,255,0.7)",
                boxShadow: "0 0 18px rgba(134,54,255,0.4), inset 0 0 14px rgba(252,47,152,0.12)",
                background:
                  "radial-gradient(circle, rgba(134,54,255,0.1) 0%, rgba(252,47,152,0.06) 60%, transparent 100%)",
                backdropFilter: "brightness(1.3) saturate(1.5)",
                pointerEvents: "none",
                zIndex: 10,
              }}
            />
          )}
        </div>
      </figure>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-1 mt-3 relative z-10">
        {/* View Details */}
        <motion.div whileHover={{ scale: 1.07, x: 3 }} whileTap={{ scale: 0.93 }} transition={SPRING}>
          <Link
            to={`/projects/${id}`}
            className="btn mx-1 bg-transparent px-[2px] duration-300 hover:text-pColor py-[2px] explore-btn w-max rounded-full h-max min-h-max border-none hover:border-none"
          >
            <span className="bg-primary flex items-center gap-1 border-t border-[#8636ff]/50 md:px-6 px-4 text-xs md:text-[14px] py-2 md:py-3 rounded-full relative">
              View Details
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <GoArrowRight />
              </motion.span>
            </span>
          </Link>
        </motion.div>

        {/* Preview */}
        <motion.button
          whileHover={{ scale: 1.07, y: -2 }}
          whileTap={{ scale: 0.93 }}
          transition={SPRING}
          onClick={() => window.open(`${liveLink}`, "_blank")}
          className="btn mx-1 bg-transparent px-[2px] duration-300 hover:text-pColor py-[2px] explore-btn w-max rounded-full h-max min-h-max border-none hover:border-none"
        >
          <span className="bg-primary flex items-center gap-1 border-t border-[#8636ff]/50 md:px-6 px-4 text-xs md:text-[14px] py-2 md:py-3 rounded-full relative">
            Preview <GoLinkExternal />
          </span>
        </motion.button>

        {/* GitHub */}
        <motion.button
          whileHover={{ scale: 1.07, y: -2 }}
          whileTap={{ scale: 0.93 }}
          transition={SPRING}
          onClick={() => window.open(`${githubRepo}`, "_blank")}
          className="btn mx-1 bg-transparent px-[2px] duration-300 hover:text-pColor py-[2px] explore-btn w-max rounded-full h-max min-h-max border-none hover:border-none"
        >
          <span className="bg-primary flex items-center gap-1 border-t border-[#8636ff]/50 md:px-6 px-4 text-xs md:text-[14px] py-2 md:py-3 rounded-full relative">
            Github Code
            <motion.span
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaGithub />
            </motion.span>
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCart;
