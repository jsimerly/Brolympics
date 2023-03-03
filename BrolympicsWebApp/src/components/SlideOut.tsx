import Close from '@mui/icons-material/Close';

const options = [
    'My Team',
    'Up Coming',
    'Leaderboard',
    'Events',

]

const SlideOut = ({handleClick}: {handleClick: () => void}) => {
  return (
    <div className='h-screen w-[260px] bg-white text-black border flex flex-col px-6'>
        <div className="flex justify-between items-center">
            <h2 className='flex justify-center items-center h-[60px] text-[20px] font-bold z-30 text-black'>Menu</h2>
            <Close onClick={handleClick}/>
        </div>
        <ul className="grid grid-cols-1 divide-y divide-gray-300">
            {options.map((option, i) => (
                <li className='py-3' key={'menu_option' + i}>
                    {option}
                </li>
            ))}
        </ul>
        
    </div>
  )
}

export default SlideOut