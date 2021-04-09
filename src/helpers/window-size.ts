import { useEffect, useState } from "react";

function UseWindowSize(): IWindowSize {
    const [windowSize, setWindowSize] = useState({
        width: 200,
        height: 50,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize(): void {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
}

export interface IWindowSize {
    width: number;
    height: number;
}

export default UseWindowSize;
