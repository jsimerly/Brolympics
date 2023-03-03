import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useDropdown from '../hooks/useDropdown'

import SlideOut from './SlideOut'

const NavBar = () => {
    // const [slideOpen, setSlideOpen, handleClick, slideNode] = useDropdown(false)
    return (
        <div className='h-[60px] bg-primary flex items-center justify-between text-white'>
            <div className='m-6'>
                Brolympics
            </div>
            <div className='m-6'><AccountCircleIcon sx={{fontSize:'35px'}}/></div>
        </div>
    )
}

export default NavBar
