"use client";
import "./App.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBell, FaBellSlash } from "react-icons/fa";

function App() {
  const [islandState, setIslandState] = useState("idle");
  const [showSilentBell, setShowSilentBell] = useState(false);

  useEffect(() => {
    let timer;
    if (islandState === "ring") {
      setShowSilentBell(false); // show ringing bell initially
      timer = setTimeout(() => {
        setShowSilentBell(true); // switch to silent bell AFTER red background appears
      }, 2700);
    } else {
      setShowSilentBell(false);
    }

    return () => clearTimeout(timer);
  }, [islandState]);

  return (
    <div className="w-full bg-[#151515] min-h-screen flex justify-center items-center">
      <div className="w-full h-full max-w-[400px] gap-20 flex flex-col justify-center items-center">
        <motion.div
          initial={{ width: "160px" }}
          animate={{ width: islandState == "ring" ? "200px" : "160px" }}
          className="bg-black flex rounded-full min-w-[160px] min-h-11 flex-row justify-between items-center px-3"
        >
          {islandState === "ring" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, filter: "blur(10px)" }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: islandState === "ring" ? "blur(0)" : "blur(10px)",
              }}
              transition={{ duration: 0.4 }}
            >
              {showSilentBell ? (
                <div className="w-fit h-fit relative flex justify-center items-center pl-2">
                  <motion.span
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{
                      scaleX: showSilentBell ? 1 : 0,
                      opacity: showSilentBell ? 1 : 0,
                    }}
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      duration: 0.3,
                    }}
                    className="w-full h-full rounded-full bg-red-500 px-6 py-3 top-[-3px] left-[-4px] origin-left absolute z-0"
                  >
                    .
                  </motion.span>
                  <motion.b
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showSilentBell ? 1 : 0 }}
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      duration: 0.2,
                      delay: 0.1,
                    }}
                  >
                    <FaBellSlash className="text-lg text-white z-10 relative" />
                  </motion.b>
                </div>
              ) : (
                <motion.div
                  animate={{
                    rotate: [0, -15, 15, -10, 10, -5, 5, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 1.3,
                  }}
                  className="pl-2"
                >
                  <FaBell className="text-lg text-white" />
                </motion.div>
              )}
            </motion.div>
          )}

          <motion.div
            className="text-sm text-white pr-0 overflow-hidden w-[60px] h-[20px] flex items-center justify-start relative"
            initial={false}
          >
            <motion.p
              key={showSilentBell ? "silent" : "ring"}
              initial={{ opacity: 0, x: 20,  filter: "blur(10px)"}}
              animate={{ opacity: 1, x: 0,  filter: islandState === "ring" ? "blur(0)" : "blur(10px)"}}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute right-1"
            >
              {islandState == "ring"
                ? showSilentBell
                  ? "Silent"
                  : "Ring"
                : ""}
            </motion.p>
          </motion.div>
        </motion.div>

        <span className="w-full flex flex-row gap-5 justify-center">
          <button
            onClick={() => setIslandState("idle")}
            className="w-[120px] h-[40px] rounded-full bg-[#101010] border-[1px] border-[#212121] font-normal text-gray-100 text-base"
          >
            Idle
          </button>
          <button
            onClick={() => setIslandState("ring")}
            className="w-[120px] h-[40px] rounded-full bg-[#101010] border-[1px] border-[#212121] font-normal text-gray-100 text-base"
          >
            Ring
          </button>
        </span>
      </div>
    </div>
  );
}

export default App;
