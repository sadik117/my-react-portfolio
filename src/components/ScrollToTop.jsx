import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          onClick={scrollTop}
          initial={{ opacity: 0, scale: 0.4, y: 30 }}
          animate={{ opacity: 1, scale: 1,  y: 0  }}
          exit={{   opacity: 0, scale: 0.4, y: 30 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{  scale: 0.9  }}
          title="Back to top"
          style={{
            position: "fixed",
            bottom: "1rem",
            right: "1rem",
            zIndex: 9999,
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            background: "linear-gradient(135deg, #8636ff 0%, #fc2f98 100%)",
            boxShadow:
              "0 0 18px rgba(134,54,255,0.55), 0 0 36px rgba(252,47,152,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Animated inner ring */}
          <motion.span
            animate={{ opacity: [0.4, 0, 0.4], scale: [1, 1.7, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.35)",
              pointerEvents: "none",
            }}
          />

          {/* Bouncing arrow */}
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <FaArrowUp style={{ color: "#fff", fontSize: 16 }} />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
