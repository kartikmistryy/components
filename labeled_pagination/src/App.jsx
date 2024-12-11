import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useMotionValueEvent, useScroll } from 'framer-motion'

function App() {
  const carouselRef = useRef(null)
  const { scrollX } = useScroll({
    container: carouselRef
  })

  const [activeLink, setActiveLink] = useState(0)

  useMotionValueEvent(scrollX, 'change', (e) => {
    if(e<=279){
      setActiveLink(0)
    }
    else if(e <= 480){
      setActiveLink(1)
    }
    else if(e <= 866){
      setActiveLink(2)
    }
    else if(e <= 1210){
      setActiveLink(3)
    }
    else if(e <= 1520){
      setActiveLink(4)
    }
    else {
      setActiveLink(5)
    }
  })

  const linkTexts = [
    "Accesibility", 
    "Audio Sharing", 
    "Automatic Switching Slides", 
    "One tap slide image", 
    "Siri", 
    "Spatial Audio"
  ]

  return(
    <div className='py-24 bg-[#f6f6f6] h-screen w-full overflow-x-hidden'>
      <h1 className='text-4xl font-medium text-center'>A Magical connection <br /> to your devices.</h1>

      <main ref={carouselRef} className='w-full h-fit pl-[30em] pr-[28em] flex flex-row gap-10 overflow-scroll py-10 px-4'>
        {linkTexts.map((text, index) => (
          <div key={index} className='p-4 bg-white rounded-2xl min-w-[280px] h-fit cursor-pointer'>
            <img src={`${index + 1}.jpeg`} alt="" className='w-full p-2 h-[300px] object-contain' />
            <h1 className='text-center font-normal text-xl py-2'>{text}</h1>
          </div>
        ))}
      </main>

      <ul className='flex flex-row justify-between w-fit mx-auto items-center gap-2'>
        {linkTexts.map((text, index) => (
          <motion.li 
            key={index}
            initial={{ scale: activeLink === index ? 1 : 0.8 }}
            animate={{ scale: activeLink === index ? 1 : 0.8 }}
            className={`
              ${activeLink === index 
                ? 'min-w-fit px-2 py-1 bg-white rounded-full flex justify-center items-center font-medium text-xs' 
                : 'w-3 h-3 bg-[#e6e6e6] rounded-full'}
            `}
          >
            {activeLink === index ? text : ''}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default App