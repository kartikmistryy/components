import './App.css'
import { motion, useMotionValue, useTransform } from 'framer-motion'

function App() {

  const y = useMotionValue(0)

  const yVal = [0, 30, 60]

  const transformX = useTransform(y, yVal, [
    "rotateX(90deg)",
    "rotateX(0deg)",
    "rotateX(0deg)"
  ])

  const scaleX = useTransform(y, yVal, [
    0,
    0.4,
    1
  ])

  const translateY = useTransform(y, yVal, [
    "-200%",
    "-100%",
    "0%"
  ])

  const hoverBoxHeight = useTransform(y, [0, 60], [
    "90px",
    "170px"
  ])

  const handleDrag = () => {
    console.log(y)
    if(10 >= y){
      y.set(100)
    }
    else{
      y.set(0)
    }
    console.log(skewX)
  }

  const skewX = useTransform(y, yVal, [
    4,
    2,
    0
  ])

  const cardX = useTransform(y, [0, 60], [
    0,
    -100
  ])

  const scaleCard = useTransform(y, [0, 30, 60], [
    1,
    0.8,
    1
  ])

  const rotateCard = useTransform(y, [0, 30, 60], [
    "0deg", 
    "5deg", 
    "0deg", 
  ])

  const boxBorderRadius = useTransform(y, yVal, [
    "5px 5px 5px 5px",
    "10px 10px 10px 10px",
    "10px 10px 0 0",
  ])

  const secondBoxBorderRadius = useTransform(y, yVal, [
    "5px 5px 5px 5px",
    "0px 0px 0px 0px",
    "0 0 0 0"
  ])

  return (
    <motion.div className='w-full h-screen flex items-center justify-center bg-[#fff]'>
      <motion.div 
        drag="y"
        className="w-[320px] h-52 rounded-md cursor-pointer"
        dragConstraints={{ top: 0, bottom: 60 }}
        style={{ y: y, height: hoverBoxHeight }}
        onDragEnd={() => handleDrag()}
      >
        <motion.div 
        style={{ rotate: rotateCard, y: cardX, scale: scaleCard }} 
        className='flex flex-col w-[320px] h-[270px] justify-start'>

          <motion.div style={{ borderRadius: boxBorderRadius}} className="h-[90px] z-10 bg-[#f9fafb] p-3 flex flex-col">
            <p className='text-sm  font-light text-gray-600'>August 24, 2024 at 7:01 PM</p>

            <span className='mt-1 flex flex-col gap-1'>
              <h2 className='text-sm font-light text-gray-600'>Sent from: <b className='text-gray-900 font-medium'>Dave</b></h2>
              <h3 className='text-sm font-medium'>Dear Sir, if you've found this message kind..</h3>
            </span>
          </motion.div>

          <motion.div className='h-[90px] bg-[#f9fafb] origin-top p-3 border-t-[.3px] border-gray-100' style={{ scaleY: scaleX, opacity: scaleX, borderRadius: secondBoxBorderRadius }}>
            <p className='text-xs text-gray-700'>"if you've found this message kindly take some time to let us know about our latest newsletter, we would appericiate your feedback, thankyou"</p>
          </motion.div>

          <motion.div className='h-[90px] origin-top rounded-bl-md rounded-br-md px-3 py-1 bg-[#f9fafb] border-t-[.3px] border-gray-100' style={{ translateY: translateY, borderRadius: secondBoxBorderRadius}}>
            <div className='flex flex-col justify-between h-full'>
              <div className='flex flex-row items-center justify-between'>
                <span className='flex flex-col justify-center items-start'>
                  <p className='text-xs font-light mb-1'>Sender</p>
                  <p className='text-[14px] flex flex-row items-center gap-2'> <img className='h-4 w-4 rounded-full' src='https://images.pexels.com/photos/29267513/pexels-photo-29267513/free-photo-of-young-tourist-taking-photo-on-busy-city-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/> Dave</p>
                </span>
                <a href='#' className='text-xs font-light underline'>Unsubscribe</a>
              </div>

              <span className='flex flex-row justify-evenly items-center gap-2'>
                <button className='w-full bg-[#374151] hover:bg-[#303846] rounded-xl py-2 px-3 text-sm text-white flex flex-row items-center gap-1 justify-center'>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 12l5 3V3a2 2 0 00-2-2H5a2 2 0 00-2 2v12l5-3zm-4 1.234l4-2.4 4 2.4V3a1 1 0 00-1-1H5a1 1 0 00-1 1v10.234z" clip-rule="evenodd"></path></svg>
                Bookmark</button>

                <button className='w-full bg-[#fee2e2] hover:bg-[#ffdddd] rounded-xl py-2 px-3 text-sm text-red-500 flex flex-row items-center justify-center gap-1'>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg>
                Delete</button>

                <button className='w-full bg-[#3b82f6] hover:bg-[#3982f8] rounded-xl py-2 px-3 text-sm text-white flex flex-row items-center justify-center gap-1'>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                Reply</button>
              </span>
            </div>
          </motion.div>
        </motion.div>        
      </motion.div>
    </motion.div>
  )
}

export default App
