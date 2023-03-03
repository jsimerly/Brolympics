import { useState, Dispatch, SetStateAction } from 'react'

type UseOpenAndCloseProps = (defaultOpen: boolean) => [boolean, Dispatch<SetStateAction<boolean>>, any];

const useOpenAndClose: UseOpenAndCloseProps = (defaultOpen) => {
    const [open, setOpen] = useState(defaultOpen)

    const handleOnClick = () => {
        setOpen(!open)
    }

    return [open, setOpen, handleOnClick]
}

export default useOpenAndClose