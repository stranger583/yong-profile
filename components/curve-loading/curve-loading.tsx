'use client'
import React, { useRef, useEffect } from 'react'

function CurveLoading() {
    const loader = useRef<HTMLDivElement>(null);
    const path = useRef<SVGPathElement>(null);
    const initialCurve = 200;
    const duration = 600;
    let start: number | undefined;

    useEffect(() => {
        setPath(initialCurve)
        setTimeout(() => {
            requestAnimationFrame(animate)
        }, 500)
    }, [])

    const animate = (timestamp: number) => {
        if (start === undefined) {
            start = timestamp
        }
        const elapsed = timestamp - start;

        const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration)
        setPath(newCurve);

        if (loader.current) {
            loader.current.style.top = easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";
        }

        if (elapsed < duration) {
            requestAnimationFrame(animate)
        }
    }

    const easeOutQuad = (time: number, start: number, end: number, duration: number) => {
        return -end * (time /= duration) * (time - 2) + start;
    }

    const loaderHeight = () => {
        const loaderBounds = loader.current?.getBoundingClientRect();
        return loaderBounds?.height || 0;
    }

    const setPath = (curve: number) => {
        const width = window.innerWidth
        const height = loaderHeight();
        path.current?.setAttributeNS(null, "d",
            `M0 0
      L${width} 0
      L${width} ${height}
      Q${width / 2} ${height - curve} 0 ${height}
      L0 0`
        )
    }

    return (
        <div ref={loader} className={'top-0 bg-background h-[calc(100vh_+_200px)] w-full fixed z-[100]'}>
            <svg className='size-full'>
                <path className='' ref={path}></path>
            </svg>
        </div>
    )
}

export default CurveLoading
