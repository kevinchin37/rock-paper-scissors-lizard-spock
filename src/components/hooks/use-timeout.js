import { useEffect, useState } from "react"

const useTimeout = (delay) => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const delayTimer = setTimeout(() => {
            setIsShow(true);
        }, delay);

        return () => {
            clearTimeout(delayTimer);
        }
    }, []);

    return { isShow };
}

export default useTimeout;