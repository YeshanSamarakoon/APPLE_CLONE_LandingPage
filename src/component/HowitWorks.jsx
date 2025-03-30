import React, { useRef } from 'react'
import { explore3Img, galax3Video } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animation';
import  ShootingStars  from "../component/ui/shootingStar";
import  StarsBackground from "../component/ui/starsBg";

const HowitWorks = () => {
  const videoRef = useRef();
  
  
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
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width" width="50px" >
        <video playsInline id="galVideo" className="w-full h-full object-cover object-center" preload="none" muted autoPlay ref={videoRef} width="50px">
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
          <div className="relative h-full w-full flex-center mb-40">
            
            <div className="overflow-hidden flex-1 h-[50vh]">
                              <img src={explore3Img} alt="titanium 2" />
                              <div className="absolute inset- flex flex-col items-center justify-center text-center text-white">
                <div className="w-full h-px bg-white mb-1"></div>
                
              </div>
              <div className="absolute top-[-140px] left-[500px] h-[300px] w-px bg-white">
                <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 -translate-y-full  text-center">
                 <h1 className="hiw-title2 text-blue">200MP</h1> Wide-angle & 2x Optical Quality Zoom<br />
    
                </div>
              </div>
              <div className="absolute bottom-[10px] left-[430px] h-[220px] w-px bg-white">
              
                <div className="absolute bottom-[-80px] left-1/2 transform -translate-y-1/2 -translate-x-full  text-center">
                 <h1 className="hiw-title2 text-blue">50MP</h1><br />
  
                </div>
                
              </div>
              
              <div className="absolute bottom-[80px] left-1/2 h-[150px] w-px bg-white">
              
                <div className="absolute bottom-[-220px] left-1/2 transform -translate-x-1/2 -translate-y-full  text-center">
                 <h1 className="hiw-title2 text-blue">10MP</h1>3x Optical Zoom <br />
                  
                </div>
                
              </div>
              
              <div className="absolute top-[-10px] right-1/2 h-1/3 w-px bg-white">
              
                <div className="absolute top-[-1px] left-[80px] transform -translate-y-1/2 -translate-x-full  text-center">
                 <h1 className="hiw-title2 text-blue">12MP</h1>Ultra Wide <br />
                  
                </div>
                
              </div>
              <div className="absolute top-[310px] left-[740px] h-[100px] w-px bg-white ">
              
                <div className="absolute bottom-[-80px] left-[80px] transform -translate-y-1/2 -translate-x-full  text-center">
                 <h1 className="hiw-title2 text-blue">12MP</h1>Selfie Camera <br />
                  
                </div>
                
              </div>

            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3"></p>
          </div>

          <div className="hiw-text-container mt-40">
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
            <ShootingStars style={{ zIndex: -1 }} />
<StarsBackground style={{ zIndex: -1 }} />
    </section>
  )
}

export default HowitWorks