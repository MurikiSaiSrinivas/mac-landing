import { useGSAP } from '@gsap/react';
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap';

const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

    useGSAP(() => {
        if (!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                },
            });
            timeline.to('.mask img', {transform: 'scale(1.2)' }).to('.content', {opacity:1, y: 0, ease: 'power1.in'});
        }
    }, [isTablet]);
    return (
        <section id='showcase'>
            <div className="media xl:m-auto xl:max-w-[70%]">
                <video src="/videos/game.mp4" loop muted autoPlay playsInline></video>
                <div className="mask">
                    <img src="/mask-logo.svg" alt="mask logo" />
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Rocket Chip</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>Introducing {" "}
                                <span className='text-white'>M4, the next generation of Apple silicon.</span>
                                . M4 powers
                            </p>
                            <p>The M5 chip joins M4 Pro and M4 Max to create the most advanced series of chips ever built for a pro laptop. Each chip delivers phenomenal single- and multithreaded CPU performance and faster unified memory — giving you the kind of speed you’ve never thought possible. And with powerful Neural Accelerators in the M5 chip, you can fly through AI tasks at mind-bending speeds. </p>
                            <p>The M5 chip joins M4 Pro and M4 Max to create the most advanced series of chips ever built for a pro laptop. Each chip delivers phenomenal single- and multithreaded CPU performance and faster unified memory — giving you the kind of speed you’ve never thought possible. And with powerful Neural Accelerators in the M5 chip, you can fly through AI tasks at mind-bending speeds. </p>
                            <p className="text-primary">Learn more about the M5 chip and its capabilities.</p>
                        </div>
                    </div>
                    <div className="max-w-3xs space-y-14 pt-10">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>4X faster</h3>
                            <p>CPU performance better than M4</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase