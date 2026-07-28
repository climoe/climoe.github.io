'use client'

import React, { useEffect, useState, useCallback } from 'react'

const useSticky = (ref: React.RefObject<any>) => {
  
    const [isSticky, setSticky] = useState(false)
    const element = ref
    
    const stickyHandler = useCallback(() => {
            
        const scrollY = window.scrollY
        const elementPosition = element.current.offsetTop
        scrollY > elementPosition ? setSticky(true) : setSticky(false)
    }, [element])

    useEffect(() => {
        window.addEventListener("scroll", stickyHandler)
    }, [stickyHandler])

    return isSticky;
}

export default useSticky;