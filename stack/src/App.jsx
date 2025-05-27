"use client"
import './App.css'
import { motion } from 'framer-motion'
import { useState } from 'react'

function App() {

  const [show, setShow] = useState(false)

  return (
    <div className='w-full bg-[#efefef] min-h-screen flex justify-center items-center'>
      <motion.div 
      layout
      animate={{
        y: show ? 0 : -30,
      }}
      transition={{type: 'tween', duration: 0.5}}
      className='w-full h-full flex flex-col gap-5 max-w-[350px] relative'>
        <motion.div 
        layout
        animate={{
          y: show ? 0 : 50,
        }}
        transition={{type: 'tween', duration: 0.5}}
        className='w-full h-full flex flex-row justify-between z-0 px-2'>
          <p>Notifications</p>
          <button 
          onClick={() => setShow(!show)}
          className='h-fit w-fit px-3 py-1 text-xs font-medium flex items-center justify-center  text-[#222222] bg-white rounded-2xl'>Collapse</button>
        </motion.div>

        <motion.div 
        layout
        className='w-full h-fit flex flex-col gap-2'>
          <motion.div 
          onClick={() => setShow(!show)} 
          animate={{
            y: show ? 0 : 0,
          }}
          transition={{type: 'tween', duration: 0.3}}
          className='w-full h-20 bg-[#fff] border-[1px] border-[#dfdfdfb9] rounded-2xl shadow-sm z-20 flex flex-row justify-start items-center p-3 cursor-pointer'>
            <span className='text-xl bg-indigo-500 w-10 h-10 flex justify-center items-center rounded-2xl'>
              💶
            </span>
            <span className='text-sm pl-4'>
              <span className='w-full h-fit flex flex-row items-center justify-start'>
                <h3 className='text-base font-medium text-[#2e2e2e]'>Payment recieved ·</h3>
                <p className='text-sm text-gray-400 font-normal ml-1'>just now</p>
              </span>
              Paypal
            </span>
          </motion.div>
          <motion.div 
          animate={{
            y: show ? 0 : -100,
            scaleX: show ? 1 : 0.96,
            opacity: show ? 1 : 0.7,
          }}
          transition={{type: 'tween', duration: 0.4}}
          className='w-full h-20 shadow-sm bg-[#fff] border-[1px] border-[#dfdfdfb9] rounded-2xl z-10 flex flex-row justify-start items-center p-3 cursor-pointer'>
            <span className='text-xl bg-pink-500 w-10 h-10 flex justify-center items-center rounded-2xl'>
              💬
            </span>
            <span className='text-sm pl-4'>
              <span className='w-full h-fit flex flex-row items-center justify-start'>
                <h3 className='text-base font-medium text-[#2e2e2e]'>New Message ·</h3>
                <p className='text-sm text-gray-400 font-normal ml-1'> 4m ago</p>
              </span>
              iMessage
            </span>
          </motion.div>
          <motion.div 
          animate={{
            y: show ? 0 : -200,
            scaleX: show ? 1 : 0.9,
            opacity: show ? 1 : 0.5,
          }}
          transition={{type: 'tween', duration: 0.6}}
          className='w-full h-20 shadow-sm bg-[#fff] border-[1px] border-[#dfdfdfb9] rounded-2xl z-0 flex flex-row justify-start items-center p-3 cursor-pointer'>
            <span className='text-xl bg-blue-500 w-10 h-10 flex justify-center items-center rounded-2xl'>
              🌥️
            </span>
            <span className='text-sm pl-4 flex flex-col'>
              <span className='w-full h-fit flex flex-row items-center justify-start'>
                <h3 className='text-base font-medium text-[#2e2e2e]'>Weather update ·</h3>
                <p className='text-sm text-gray-400 font-normal ml-1'> 6m ago</p>
              </span>
              Weather
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default App
