import { useRef, useEffect} from "react";

type ClickHandler = (clickedOutside: boolean) => any;

let useClickOutside = (handler: ClickHandler) => {
    let domNode = useRef<HTMLInputElement>();

    useEffect(() => {
        let domHandler = (e: MouseEvent) => {

            if (!domNode.current?.contains(e.target as Node)){
                handler(false);
            }
        }
        document.addEventListener('mousedown', domHandler)

        return () => (
            document.removeEventListener('mousedown', domHandler)
        )
    }, [handler, domNode])

    return domNode
}

export default useClickOutside