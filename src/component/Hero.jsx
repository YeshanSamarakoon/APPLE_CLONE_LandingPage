import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { exploreVideo } from '../utils';
import { useState } from 'react';
import { useEffect } from 'react';

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth<760 ?
        exploreVideo : exploreVideo)
    
        const handleVideoSrcSet =() => {
            if(window.innerWidth< 760){
                setVideoSrc(exploreVideo)
            } else {
                setVideoSrc(exploreVideo)
            }
        }
     
        useEffect (() => {

            window.addEventListener('resize', handleVideoSrcSet);
            return () => {
                window.removeEventListener('resize', handleVideoSrcSet)
            }
        }, [])

    useGSAP(()=> { 
        gsap.to('#hero', { opacity: 1 , delay: 1.5})

        gsap.to('#cta', { opacity: 1, y: -50, delay: 2})

    }, [])
  return (
    <section className="w-full nav-height bg-black
    relative mt-40">
         <div className="h-5/6 w-full flex-center flex-col">
         <p id="hero" className="hero-title">Samsung Galaxy S24 ULTRA</p>
         <div className="md:w-10/12 w-9/12">
         <video className="pointer-events-none" autoPlay muted playsInline={true} 
         loop key={videoSrc}>
                <source src={videoSrc} type="video/mp4"/>
         </video>
         </div>
         </div>
        <div  id="cta" className="flex flex-col items-center opacity-0
        translate-y-20">
            <a href="#highlights" className="btn">CHECK</a>
            
        </div>
     </section> 
  )
}

export default Hero
