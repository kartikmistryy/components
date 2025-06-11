import './App.css'
import { motion, useMotionValue, useMotionValueEvent, useTransform } from 'framer-motion'
import { useState } from 'react'

function App() {
  return (
    <>
      <FoldableCard/>
    </>
  )
}

const FoldableCard = () => {

  const xDrag = useMotionValue(0)
  const xLeftSection = useTransform(xDrag, [0, 300], ["100%", "0%"])
  const xRightSection = useTransform(xDrag, [0, 300], ["-100%", "0%"])
  const centerScale = useTransform(xDrag, [150, 300], [0, 1])
  const centerBrightness = useTransform(xDrag, [150, 300], [0.3, 1])

  const [isFolded, setIsFolded] = useState()

  useMotionValueEvent(xDrag, "change", (currentX) => {
    if(currentX > 260){
      setIsFolded(false)
    }
    else {
      setIsFolded(true)
    }
  })

  return(
    <motion.div 
      animate={isFolded ? "folded": "open"}
      variants={{ 
        open: {scale: 1}, 
        folded: {scale: 0.95}
      }} initial="folded">
      <div className="mx-auto grid aspect-video max-h-[70vh] p-8 mt-24 cursor-grab">
        <div className="aspect-video grid grid-cols-3 h-full w-full [grid-area:1/1]">
          <motion.div style={{x: xLeftSection, skewY: "-1deg"}} className="map-image -skew-y-1 origin-bottom-right shadow-2xl "/>
          <motion.div style={{scaleX: centerScale, "--brightness": centerBrightness}} className="map-image brightness-[--brightness]"/>
          <motion.div style={{x: xRightSection, skewY: "1deg"}} className="map-image skew-y-1 origin-top-left border-1 border-[rgba(255, 255, 255, 0.2)] shadow-2xl"/>
        </div>
        <motion.div 
        drag="x"
        _dragX={xDrag}
        dragTransition={{
          modifyTarget: (target) => {
            return target > 150 ? 300 : 0
          },
          timeConstant: 450
        }}
        dragConstraints= {{left: 0, right: 300}} className=' [grid-area:1/1] relative z-10'/>
      </div>
    </motion.div>
  )
}

export default App