import React from 'react'
import { performanceImages, performanceImgPositions } from '../contants'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Scroll } from '@react-three/drei';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Performance = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const sectionRef = React.useRef(null);

    useGSAP(() => {
        gsap.fromTo('.content p', 
            { opacity: 0, y: 10 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.content p',
                    start: 'top bottom',
                    end: 'top center',
                    scrub: true,
                    invalidateOnRefresh: true,
                },
            })

        if (isMobile) return;

        const tl = gsap.timeline({
            defaults: { ease: 'power1.inOut', duration: 2, overwrite: 'auto' },
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: 'center center',
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });

        performanceImgPositions.forEach((pos) => {
            if (pos.id === "p5") return; // Skip the central image

            // gsap.set(`.${pos.id}`, { y: 100, autoAlpha: 0 }); // Initial position

            const toVars = {};

            if (pos.left !== undefined) toVars.left = `${pos.left}%`;
            if (pos.right !== undefined) toVars.right = `${pos.right}%`;
            if (pos.bottom !== undefined) toVars.bottom = `${pos.bottom}%`;
            if (pos.transform !== undefined) toVars.transform = pos.transform;

            tl.to(`.${pos.id}`, toVars, 0); // Animate all images simultaneously
        });

        const onResize = () => ScrollTrigger.refresh();
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
            tl.kill();
        };

    }, { scope: sectionRef, dependencies: [isMobile] });

    return (
        <section id="performance" ref={sectionRef}>
            <h2>Next Level graphics performance. Game on.</h2>
            <div className="wrapper">
                {performanceImages.map(({ id, src }) => (
                    <img key={id} className={id} src={src} alt={id} />
                ))}
            </div>
            <div className="content">
                <p>Experience the next level of gaming performance. Graphics just got serious, and
                    <span className='text-white'> feels more realistic and immersive than ever. </span>
                    And Dynamic Caching ensures smooth gameplay without interruptions.
                </p>
            </div>
        </section>
    )
}

export default Performance