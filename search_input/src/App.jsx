import { useEffect, useRef, useState } from 'react'
import './App.css'
import { BsCommand } from 'react-icons/bs'
import { motion } from 'framer-motion'

function App() {

  const inputRef = useRef(null)

  const [keyBindingState, setKeyBindingState] = useState(<BsCommand/>)

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if(e.metaKey && e.key == "k"){
        inputRef.current.focus()
        e.preventDefault()
      }
      else if(inputRef.current == document.activeElement && e.key == "Escape"){
        inputRef.current.blur()
      }
    })
  }, [])

  useEffect(() => {
    if(inputRef.current) {
      inputRef.current.addEventListener('focus', () => {
        setKeyBindingState("esc")
      })
      inputRef.current.addEventListener('blur', () => {
        setKeyBindingState(<BsCommand/> )
      })
    }
  }, [])

  return(
    <div className='h-screen w-full flex items-center justify-center flex-col relative'>
      <div className='flex relative h-8 w-fit justify-center items-center'>
        <input ref={inputRef} type="text" placeholder='Search item...'
         className={`w-[200px] h-[35px] focus:w-[300px] border-[1px] px-2 py-1 rounded-lg bg-[#f6f6f6] text-sm focus:ring-4 focus:bg-blue-100  focus:ring-blue-400 outline-white transition-all focus:scale-105`}
         />
         <span className="absolute right-1 w-fit  text-[10px] ">
          {
            keyBindingState == "esc" ? <span className='flex flex-row items-center'>Press <button className='bg-white p-1 border-[1px] rounded-md border-gray-300 mx-1'>{keyBindingState}</button> to exit</span> : <button className='flex flex-row  items-center gap-1 bg-white p-1 border-[1px] rounded-md border-gray-300'>
              <BsCommand/> K
            </button>
          }
          </span>
      </div>

      {inputRef.current == document.activeElement && <motion.div 
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 120,
        }} 
        transition={{
          type: "spring",
          duration: .7
        }} 
        className='flex flex-col items-start justify-start w-[320px] absolute'>
        <span className='flex flex-row justify-between w-full h-6 mt-1 px-2'>
          <h3 className='text-xs font-normal text-gray-400'>Recent Searches</h3>
          <p className='text-xs font-normal text-gray-400 p-0 hover:text-red-400 cursor-pointer'>Clear</p>
        </span>
        <ul className='flex flex-col w-full h-full items-start justify-start mt-1 gap-1'>
          <motion.li initial={{opacity: 0}} whileInView={{ opacity: 1}} transition={{ delay: .1, duration: .3}} className={`cursor-pointer flex flex-row justify-between items-center py-3 px-2 rounded-xl hover:bg-blue-50 w-full h-10 font-light hover:font-normal hover:after:content-['→'] after:ml-auto after:text-blue-500 after:text-lg`}>Best accessories for Laptops</motion.li>
          <motion.li initial={{opacity: 0}} whileInView={{ opacity: 1}} transition={{ delay: .2, duration: .3}} className={`cursor-pointer flex flex-row justify-between items-center py-3 px-2 rounded-xl hover:bg-blue-50 w-full h-10 font-light hover:font-normal hover:after:content-['→'] after:ml-auto after:text-blue-500 after:text-lg`}>Hydration drinks for athletes</motion.li>
          <motion.li initial={{opacity: 0}} whileInView={{ opacity: 1}} transition={{ delay: .3, duration: .2}} className={`cursor-pointer flex flex-row justify-between items-center py-3 px-2 rounded-xl hover:bg-blue-50 w-full h-10 font-light hover:font-normal hover:after:content-['→'] after:ml-auto after:text-blue-500 after:text-lg`}>USD to INR conversion</motion.li>
      </ul>
      </motion.div>}
    </div>
  )
}

export default App
