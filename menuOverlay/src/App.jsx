"use client"
import './App.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

function App() {

  const [show, setShow] = useState(false)

  return (
    <div className='w-full bg-[#f7f7f7] min-h-screen flex flex-col justify-start items-start relative overflow-x-hidden'>
      <nav className='p-4 bg-white shadow-sm w-full h-16 flex flex-row justify-between items-center relative z-0'>
        <img src="/vite.svg" alt="logo" className=''/>
        <button onClick={() => setShow(true)}>
          <HiOutlineMenuAlt4 className='text-3xl'/>
        </button>
      </nav>    
      <motion.div 
      initial={{ scale: 0.5, translateX: "400px", translateY: '-600px', borderRadius: 0}}
      animate={{
        scale: show ? 1 : 0.5,
        translateX: show ? 0 : '400px',
        translateY: show ? 0 : '-600px',
        height: show ? '100%' : '500px',
        width: show ? '100%' : '500px',
        borderRadius: show ? 0 : '100%'
      }}
      transition={{
        type: "tween",
        duration: 0.3,
        ease: "easeInOut"
      }}
      className={`w-full h-full absolute top-0 right-0 bg-white origin-center backdrop-blur-sm flex flex-col items-start z-10 justify-start p-5`}>
      <motion.div
      initial={{ opacity: 0, y: -30}}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 30 }}
      transition={{
        type: "tween",
        duration: 0.6,
        delay: 0.4
      }}
      className='w-full h-full flex flex-col justify-start items-end bg-white'
      >
        <button onClick={() => setShow(false)}>
        <GrClose className='text-2xl'/>
      </button>
      <ul className='flex flex-col items-end gap-5 mt-5 text-2xl'>
        <li><a href="#">Homepage</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      </motion.div>
      </motion.div>
    </div>
  )
}

export default App
