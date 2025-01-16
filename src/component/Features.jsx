import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animation';
import { explore1Img, explore4Img, exploreVideo } from '../utils';
import gsap from 'gsap';

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current.play();
      }
    })

    animateWithGsap('#features_title', { y:0, opacity:1})
    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      { scrub: 5.5 }
    );
    animateWithGsap(
      '.g_text',
      {y:0, opacity: 1,ease: 'power2.inOut',duration: 1}
    )
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-wdith">
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-28">
            <h2 className="text-5xl lg:text-7xl font-semibold section-heading" id="features_title">Galaxy S24</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold section-heading" id="features_title">Armor up with titanium</h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video playsInline id="exploreVideo" className="w-full h-full object-cover object-center" preload="none" muted autoPlay ref={videoRef}>
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore1Img} alt="titanium" className="feature-video g_grow" />
                </div>
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Samsung Galaxy s24 is {' '}
                    <span className="text-white">
                    Better scratch resistance with Corning® Gorilla® Armor8
                    </span>,
                    Corning® Gorilla® Armor helps protect your screen from scratches to keep your device looking beautiful,
                     no matter what your day throws your way.
                  </p>
                </div>
                
              </div>

              <div className="feature-text-container">

              <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                  Worry-free water and dust resistance{' '}
                    <span className="text-white">
                    Don't let water dampen your spirits. 
                    </span>
                    
                     Galaxy S24 Ultra is IP68 water and dust resistant so you're ready for every adventure, puddles and all.
                  </p>
                </div>
              <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore4Img} alt="titanium 2" className="feature-video g_grow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features