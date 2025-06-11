"use client";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { act, useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null)

  const imageUrl = [
    "https://images.pexels.com/photos/978695/pexels-photo-978695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/4430314/pexels-photo-4430314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/598687/pexels-photo-598687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2773478/pexels-photo-2773478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ]

  return (
    <div className="w-full bg-[#efefef] min-h-screen flex justify-center items-center">
      <div 
      onClick={(e) => {
        if(e.target == e.currentTarget){
          setActive(null)
        }
      }}
      className={`w-full h-full flex justify-center bg-[#eee] items-center ${active ? 'pointer-events-auto z-20': 'pointer-events-none z-10'} absolute cursor-pointer`}>
       <AnimatePresence>
        {active && (
           <motion.span
          initial={{scale: 0, opacity: 0}}
          animate={{
            scale: active ? 1 : 0,
            opacity: active ? 1 : 0,
          }}
          exit={{opacity: 0, scale: 0}}
          transition={{
            type: 'tween',
            duration: 0.4,
            ease: 'easeInOut'
          }}
          style={{
            backgroundImage: `url(${imageUrl[active - 1]})`
          }}
          className="origin-center h-[360px] bg-center bg-cover w-[540px] rounded-2xl shadow-sm cursor-none"
        ></motion.span>
        )}
       </AnimatePresence>
      </div>
      <motion.div
        layout
        initial={{ opacity: 0, y: 50}}
        animate={{ opacity: active ? 0 : 100, y: active ? 50 : 0}}
        transition={{
          type: 'tween',
          duration: 0.6,
          ease: 'easeInOut'
        }}
        className={`w-[600px] h-full flex flex-col justify-center items-center z-10 ${active ? 'pointer-events-none': 'pointer-events-auto'}`}
      >
        <motion.div
          onMouseOver={() => setToggle(true)}
          onMouseOut={() => setToggle(false)}
          className={`flex relative w-full h-full min-h-[300px]`}
        >
          <motion.div 
          onClick={() => setActive(1)}
          style={{ backgroundImage: `url(${imageUrl[0]})`}}
          className="w-[300px] h-[240px] bg-cover bg-center rounded-2xl border border-gray-200 absolute top-[8px] left-1/2 -translate-x-1/2 z-[2] hover:-translate-y-32 hover:rotate-2 transition-all duration-300 cursor-pointer"
          />
          <motion.div
            onClick={() => setActive(2)}
            style={{ backgroundImage: `url(${imageUrl[1]})`}}
            className="w-[320px] h-[240px] bg-cover bg-center rounded-2xl border border-gray-200 absolute top-[24px] left-1/2 -translate-x-1/2 z-[3] hover:-translate-y-32 hover:-rotate-2 transition-all duration-300 cursor-pointer"
          />
          <motion.div
          onClick={() => setActive(3)}
          style={{ backgroundImage: `url(${imageUrl[2]})`}}
            className="w-[340px] h-[240px] bg-contain bg-center rounded-2xl border border-gray-200 absolute top-[40px] left-1/2 -translate-x-1/2 z-[4] hover:-translate-y-32 hover:rotate-2 transition-all duration-300 cursor-pointer"
          />
          <motion.div
          onClick={() => setActive(4)}
          style={{ backgroundImage: `url(${imageUrl[3]})`}}
            className="w-[360px] h-[240px] bg-contain bg-center rounded-2xl border border-gray-200 absolute top-[56px] left-1/2 -translate-x-1/2 z-[5] transition-all duration-300 cursor-pointer"
          />
        </motion.div>

        <p className="text-lg font-mono text-gray-500 mt-6">Photos</p>
      </motion.div>
    </div>
  );
}

export default App;
