import React, { useRef } from 'react'
import { explore3Img, galax3Video } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animation';
import  ShootingStars  from "../component/ui/shootingStar";
import  StarsBackground from "../component/ui/starsBg";

const HowitWorks = () => {
  const videoRef = useRef();
  const imageRef = useRef();
  const revealRef = useRef();

  useGSAP(() => {

    gsap.to('#galVideo', {
      scrollTrigger: {
        trigger: '#galVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current.play();
      }
    })

    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })

    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: '50% bottom',
        end: '50% top',
        toggleActions: 'play pause reverse restart',
      },
      scale: 1.2,
      opacity: 1,
      duration: 1.5,
      ease: 'power2.inOut'
    })

    gsap.to(revealRef.current, {
      scrollTrigger: {
        trigger: revealRef.current,
        start: '50% bottom',
        end: '50% top',
        toggleActions: 'play pause reverse restart',
      },
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: 'power2.inOut'
    })

  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width" width="50px" >
        <video playsInline id="galVideo" className="w-full h-full object-cover object-center" preload="none" muted autoPlay ref={videoRef} loop key={videoRef} width="50px">
                        <source src={galax3Video} type="video/webm" />
                      </video>

        <div className="flex flex-col items-center mb-40">
          <h2 className="hiw-title">
          CAMERA.
            <br />Stunning photos,
            enhanced with AI.
          </h2>
        </div>
        
        <div className="mt-10 md:mt-80 mb-14">
          <div className="relative h-full w-full flex-center mb-10">
            
            <div className="overflow-hidden flex-1 h-full w-full relative">
                              <img src={explore3Img} alt="titanium 2" ref={imageRef} />
                              <div className="absolute inset- flex flex-col items-center justify-center text-center text-white">
                <div className="w-full h-px bg-white mb-1"></div>
                
              </div>
             

            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3"></p>
          </div>

          <div className="hiw-text-container mt-40" ref={revealRef}>
                <div className="flex flex-1 justify-center flex-col">
                  <p className="hiw-text g_fadeIn">
                  Get 2x, 3x, 5x and even 10x close-ups with  {' '}
                    <span className="text-white">
                    optical or optical-quality zoom.13,14
                    </span>.
                    The new Tele OIS is wider than before, for stabilized shots with less blur.
                  </p>

                 

                </div>
              

              <div className="flex-1 flex justify-center flex-col g_fadeIn">
                <p className="hiw-text">New</p>
                <p className="hiw-bigtext">All-day battery to play on </p>
                <p className="hiw-text">Listen to music up to23 95 hrs</p>
              </div>
              </div>
            </div>
            <ShootingStars />
            <StarsBackground />
    </section>
  )
}

export default HowitWorks