import { useEffect, useState } from "react";

type ScrollDirection = "up" | "down";

const useScrollDirection = ():ScrollDirection => {
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('up');

    useEffect(() => {
        let lastScroll = window.scrollY;

        const updateScrollDirection = () => {
            const currentScrollY = window.scrollY;
            if(currentScrollY > lastScroll) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            lastScroll = currentScrollY;
        };

        window.addEventListener("scroll", updateScrollDirection);
        return () => window.removeEventListener("scroll", updateScrollDirection);
    },[]);

    return scrollDirection;
}

export default useScrollDirection;