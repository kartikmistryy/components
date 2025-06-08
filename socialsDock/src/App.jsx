"use client";
import "./App.css";
import { useState } from "react";
import { BiLogoWhatsapp } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

function App() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="flex justify-center items-end w-full h-full min-h-screen p-10">
      <motion.div
        initial={{ scale: 1 }}
        animate={
          showLinks
            ? { scale: [1, 1.5, 1, 1.2] } // Bigger overshoot & recoil
            : { scale: 1 }
        }
        transition={{
          scale: showLinks
            ? {
                // Bounce transition (enter)
                duration: 0.5,
                times: [0, 0.3, 0.7, 1],
                ease: [0.25, 0.1, 0.25, 1],
              }
            : {
                // Exit transition (quick & smooth)
                duration: 0.2,
                ease: "easeOut",
              },
        }}
        onMouseOver={() => setShowLinks(true)}
        onMouseOut={() => setShowLinks(false)}
        className={`flex flex-row justify-center cursor-pointer origin-bottom items-center transition-all bg-[#efefef] relative backdrop-blur-md  rounded-full ${
          showLinks ? "px-8 py-6 gap-6 pb-10" : "px-4 py-3 gap-2"
        }`}
      >
        <span
          className={`min-w-1.5 min-h-1.5 cursor-pointer h-min w-min ${
            showLinks ? "bg-none" : "bg-[#969696]"
          } rounded-full flex`}
        >
          {showLinks && (
            <a href="https://x.com/kartikmistryy" className="flex flex-col justify-center items-center gap-2 origin-bottom">
              <span className="flex items-center justify-center p-1.5 rounded-full bg-black">
                <FaXTwitter className="text-white text-xl" />
              </span>
              <p className="text-xs font-medium">X(Twitter)</p>
            </a>
          )}
        </span>
        <span
          className={`min-w-1.5 min-h-1.5 h-min cursor-pointer w-min ${
            showLinks ? "bg-none" : "bg-[#969696]"
          } rounded-full flex`}
        >
          {showLinks && (
            <a href="https://www.linkedin.com/in/kartikmistryy/" className="flex flex-col justify-center items-center gap-2 origin-bottom">
              <span className="flex items-center justify-center p-1.5 rounded-full bg-blue-500">
                <FaLinkedin className="text-white text-xl" />
              </span>
              <p className="text-xs font-medium">Linkedin</p>
            </a>
          )}
        </span>
        <span
          className={`min-w-1.5 min-h-1.5 cursor-pointer h-min w-min ${
            showLinks ? "bg-none" : "bg-[#969696]"
          } rounded-full flex`}
        >
          {showLinks && (
            <a href="https://www.instagram.com/karrtikkk__/" className="flex flex-col justify-center items-center gap-2 origin-bottom">
              <span className="flex items-center justify-center p-1.5 rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
                <FiInstagram className="text-white text-xl" />
              </span>
              <p className="text-xs font-medium">Instagram</p>
            </a>
          )}
        </span>
        <p className={`text-center w-full text-xs absolute left-0 bottom-3 ${showLinks ? 'opacity-100': 'opacity-0'}`}>Follow me on</p>
      </motion.div>
    </div>
  );
}

export default App;
