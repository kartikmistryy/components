"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import './videoComponent.css'

export const details = {
  title: "Interactive Video Component",
  date: "November 2024",
  url: ""
}

const VideoComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Check if we are in the client-side (browser)
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const videoData = {
        0: {
          questionNo: 1,
          url: '../images/films2.mp4',
          question: "Are you ready to turn your passion for filmmaking into a career?"
        },
        1: {
          questionNo: 2,
          url: '../images/films1.mp4',
          question: "Do you want to learn how to craft compelling stories through film?"
        },
        2: {
          questionNo: 3,
          url: '../images/films3.mp4',
          question: "Are you curious about the secrets behind great lighting and sound design?"
        },
        3: {
          questionNo: 4,
          url: '../images/films4.mp4',
          question: "Do you want to learn how to shoot stunning visuals like a pro?"
        }
      }

      let answers = []

      const videoDiv = document.querySelector('.videos')

      const video1 = document.getElementById('video1')
      const video2 = document.getElementById('video2')
      const video3 = document.getElementById('video3')
      const video4 = document.getElementById('video4')

      const playBtn = document.querySelector('.playBtn')

      const questionNo = document.querySelector('#questionNo')
      const questionText = document.querySelector('#questionText')

      const yesBtn = document.getElementById('yesBtn')
      const noBtn = document.getElementById('noBtn')

      let index = 1
      let scrollVal = 620

      function playVideo(index) {
        switch(index + 1) {
          case 1:
            video1.play()
            break;
          case 2:
            video2.play()
            break;
          case 3:
              video3.play()
              break;
          case 4:
              video4.play()
              break;
        }
      }

      playBtn.addEventListener('click', () => {
        video1.play()
        playBtn.style.display = "none"
      })

      yesBtn.addEventListener('click', () => {
        if(index < 5 && scrollVal < 1862){
          playVideo(index)
          playBtn.style.display = "none"
          videoDiv.style.transform = `translateY(-${scrollVal}px)`
          videoDiv.style.transition = "all ease-in-out 0.3s"
          questionNo.innerHTML = videoData[index].questionNo;
          questionText.innerHTML = videoData[index].question;
          answers.push("YES")
          scrollVal += 620
          index++
        }
      })

      noBtn.addEventListener('click', () => {
        if(index < 5 && scrollVal < 1862){
          playVideo(index)
          playBtn.style.display = "none"
          videoDiv.style.transform = `translateY(-${scrollVal}px)`
          videoDiv.style.transition = "all ease-in-out 0.3s"
          questionNo.innerHTML = videoData[index].questionNo;
          questionText.innerHTML = videoData[index].question;
          answers.push("YES")
          scrollVal += 620
          index++
        }
      })
    }
  }, [isClient])

  return (
    <div className='w-full h-[70vh] overflow-hidden bg-[#f6f6f6]'>
      <div className="videoSection">
        <div className="video">
          <div className="playBtn">
            <Image width={500} height={600} src="/videoComponent/playBtn.svg" alt=""/>
          </div>
          <div className="videoContent">
            <div className="videoPrompt">
              <h3>Question <span id="questionNo">1</span> of 4</h3>
              <h1 id="questionText">Are you ready to turn your passion for filmmaking into a career?</h1>
              <div className="yesOrNo">
                <button id="yesBtn">
                  <span>
                    A
                  </span>
                  <h2>Yes</h2>
                </button>
  
                <button id="noBtn">
                  <span>
                    B
                  </span>
                  <h2>No</h2>
                </button>
              </div>
            </div>
            <h1 className="caption">Hello, I am a dummy subtitle text</h1>
          </div>
          <div className="videos">
            <video muted id="video1" className="current">
              <source src="/videoComponent/films2.mp4" type="video/mp4"/>
            </video>
            <video muted id="video2" autoPlay>
              <source src="/videoComponent/films1.mp4" type="video/mp4"/>
            </video>
            <video muted id="video3" autoPlay>
              <source src="/videoComponent/films3.mp4" type="video/mp4"/>
            </video>
            <video muted id="video4" autoPlay>
              <source src="/videoComponent/films4.mp4" type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoComponent;
