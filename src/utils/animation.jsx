import gsap from "gsap"

export const animateWithGsap =(target, animatationProps,
scrollProps) => {

    gsap.to(target, {

        ...animatationProps,
        scrollTrigger: {
            trigger: target,
            toggleActions: 'restart reverse restart reverse',
            start: 'top 85%',
            ...scrollProps,
        }
    })
}

export const animateWithGsapTimeline =(timeline,
 rotationRef , rotationState, firstTarget , secondTarget,
animationProps) =>{


    timeline.to(rotationRef.current.rotaion,{

        y:rotationState,
        duration: 1,
        ease: 'power2.inOut'


    })

    timeline.to(
        firstTarget,
        {
            ...animationProps,
            ease: 'power2.inOut'
        },
        '<'
        
    )
    timeline.to(
        secondTarget,
        {
            ...animationProps,
            ease: 'power2.inOut'
        },
        '<'
        
    )
}