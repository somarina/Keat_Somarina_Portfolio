import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={25}
    tiltMaxAngleY={25}
    glareColor="#00F0FF"
    glarePosition="all"
    glareBorderRadius="20px"
    className="transform-gpu"
  >
    <div className="max-w-[250px] w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("up", "spring", index * 0.3, 0.75)}
        className="relative w-full rounded-[20px] p-[2px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,240,255,0.2)]"
        style={{
          background: "linear-gradient(135deg, rgba(0,240,255,0.5) 0%, rgba(0,0,0,0) 50%, rgba(0,240,255,0.2) 100%)"
        }}
      >
        <div 
          className="bg-[#0b0f19] flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5 relative overflow-hidden backdrop-blur-xl border-t border-l border-white/10"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Subtle background glow inside the card */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00F0FF] rounded-full blur-[60px] opacity-20 pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#915EFF] rounded-full blur-[60px] opacity-20 pointer-events-none" />

          <div
            className="flex flex-col items-center justify-center gap-6"
            style={{ transform: "translateZ(60px)" }}
          >
            <img
              src={icon}
              alt={title}
              className="h-20 w-20 object-contain drop-shadow-[0_10px_20px_rgba(0,240,255,0.4)]"
            />

            <h3 className="text-center text-[22px] font-bold text-white tracking-wide">
              {title}
            </h3>
          </div>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <div className="flex flex-col md:flex-row gap-10 mt-4 items-center">
        <motion.div
          variants={fadeIn("right", "", 0.1, 1)}
          className="flex-1"
        >
          <p className="text-secondary text-[17px] leading-[30px]">
            {config.sections.about.content}
          </p>
          <a
            href="/CV.pdf"
            download="Keat_Somarina_CV.pdf"
            className="mt-8 inline-block bg-[#00F0FF] text-black font-bold py-3 px-8 rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.8)] transition-all duration-300"
          >
            Download CV
          </a>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "", 0.2, 1)}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-[#171717] shadow-card relative group">
             <div className="absolute inset-0 cyan-gradient opacity-20 z-10 group-hover:opacity-40 transition-opacity duration-300" />
             <img src="/profile_pic.png" alt="Keat Somarina" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
