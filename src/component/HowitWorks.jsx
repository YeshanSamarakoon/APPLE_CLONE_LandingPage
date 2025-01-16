import React, { useRef } from 'react'
import { chipImg, frameImg, explore3Img } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animation';

const HowitWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
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
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
          CAMERA.
            <br />Stunning photos,
            enhanced with AI.
          </h2>
        </div>

        <div className="mt-10 md:mt-80 mb-14">
          <div className="relative h-full w-full flex-center">
            
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
              
              <div className="absolute top-[-10px] right-1/2 h-1/3 w-px bg-white"> </div>
              <div className="absolute top-[310px] left-[740px] h-[100px] w-px bg-white "></div>

            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3"></p>
          </div>

          <div className="hiw-text-container ">
                <div className="flex flex-1 justify-center flex-col">
                  <p className="hiw-text g_fadeIn">
                    A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                    <span className="text-white">
                      best graphic performance by far
                    </span>.
                  </p>

                  <p className="hiw-text g_fadeIn">
                   Mobile {' '}
                    <span className="text-white">
                      games will look and feel so immersive
                    </span>,
                     with incredibly detailed environments and characters.
                  </p>
                </div>
              

              <div className="flex-1 flex justify-center flex-col g_fadeIn">
                <p className="hiw-text">New</p>
                <p className="hiw-bigtext">Pro-class GPU</p>
                <p className="hiw-text">with 6 cores</p>
              </div>
              </div>
            </div>
    </section>
  )
}

export default HowitWorks