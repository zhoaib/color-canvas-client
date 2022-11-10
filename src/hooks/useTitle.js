import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Color Canvas`;
    }, [title])
};

export default useTitle;