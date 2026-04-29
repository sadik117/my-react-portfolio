import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import ProjectCart from "../components/ProjectCart";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("project.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="md:pt-20 pt-10 w-10/12 mx-auto text-center "
    >
        
      <Helmet>
        <title>My Projects | Developer Sadik</title>
      </Helmet>
      <ShootingStars/>
      <StarsBackground/>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <h1 className="text-2xl relative md:text-4xl font-bold">My Projects</h1>
      <p className="lg:w-2/5 relative mx-auto pt-1 text-xs md:text-sm">
        A showcase of my work blending creativity and functionality, featuring
        interactive designs, seamless development, and innovative solutions.
      </p>
      
    
      <motion.section
        className="grid relative md:grid-cols-1 lg:grid-cols-2 gap-3 md:gap-10 py-5 md:py-10 justify-items-center"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
        }}
      >
        {projects.map((project) => (
          <ProjectCart key={project.id} project={project} />
        ))}
      </motion.section>
     
    </motion.div>
  );
};

export default Projects;
