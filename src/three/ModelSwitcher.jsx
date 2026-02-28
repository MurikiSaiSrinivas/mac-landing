import { PresentationControls } from '@react-three/drei'
import React from 'react'
import MacBookModel14 from '../components/models/Macbook-14'
import MacBookModel16 from '../components/models/Macbook-16'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const ModelSwitcher = ({ scale, isMobile }) => {

    const ANIMATION_DURATION = 1
    const OFFSET_DISTANCE = 5

    const fadeMeshes = (group, opacity) => {
        if (!group) return;
        group.traverse((child) => {
            if (child.isMesh) {
                child.material.transparent = true;
                gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
            }
        });
    }

    const moveGroup = (group, x) => {
        if (!group) return;
        gsap.to(group.position, { x, duration: ANIMATION_DURATION });
    }

    const smallBookRef = React.useRef(null)
    const bigBookRef = React.useRef(null)

    const showBigBook = scale === 0.08 || scale === 0.05

    useGSAP(() => {
        if (showBigBook) {
            moveGroup(smallBookRef.current, -OFFSET_DISTANCE)
            moveGroup(bigBookRef.current, 0)

            fadeMeshes(smallBookRef.current, 0)
            fadeMeshes(bigBookRef.current, 1)
        } else {
            moveGroup(smallBookRef.current, 0)
            moveGroup(bigBookRef.current, OFFSET_DISTANCE)

            fadeMeshes(smallBookRef.current, 1)
            fadeMeshes(bigBookRef.current, 0)
        }
    }, [scale])

    const controlsConfig = {
        snap: true,
        speed: 1.5,
        zoom: 1,
        polar: [-Math.PI / 2, Math.PI / 2],
        azimuth: [-Infinity, Infinity],
        config: { mass: 1, tension: 0, friction: 26 },
    }

    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={bigBookRef}>
                    <MacBookModel16 scale={scale} position={[0, 0, 0]} visible={showBigBook} />
                </group>
            </PresentationControls>

            <PresentationControls {...controlsConfig}>
                <group ref={smallBookRef}>
                    <MacBookModel14 scale={scale} position={[0, 0, 0]} visible={!showBigBook} />
                </group>
            </PresentationControls>
        </>
    )
}

export default ModelSwitcher