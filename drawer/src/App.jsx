"use client"
import './App.css'
import { useState } from 'react';
import { motion } from 'framer-motion';

function App() {

  const [drawerOpen, setDrawerOpen] = useState(false);


  return (
    <div className='w-full bg-[#efefef] min-h-screen flex justify-center items-center relative'>
      <button onClick={() => setDrawerOpen(!drawerOpen)} className='w-fit h-9 border-[1px] bg-white px-4 rounded-full text-sm font-medium border-[#e3e3e3]'>Open Drawer</button>

      <motion.div 
      animate={{
        y: drawerOpen ? "100%" : "0"
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30
      }}
      className='w-full h-[350px] absolute bottom-0 bg-white flex flex-col justify-start p-5 items-center origin-bottom-right'>
        <span className='w-[60px] rounded-xl h-2 bg-gray-200 border-[1px] border-[#eee]'></span>

        <span className='flex flex-col gap-1 mt-10'>
          <h1 className='text-xl font-semibold text-gray-800'>Drawer Component</h1>
          <p className='text-sm text-gray-500'>This is a drawer component that can be opened and closed.</p>

          <p className='mt-5 text-sm'>Made by <a className='underline  underline-offset-2' href="https://x.com/kartikmistryy">@kartikmistryy</a></p>
        </span>
      </motion.div>
    </div>
  )
}

export default App
