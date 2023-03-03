import { Dispatch, SetStateAction} from "react"
import {ToolOptionType} from '../types'

type ToolbarProps = {
    options: ToolOptionType[],
    currentPage: ToolOptionType,
    setCurrentPage: Dispatch<SetStateAction<ToolOptionType>>
}


const Toolbar = ({options, currentPage, setCurrentPage}: ToolbarProps) => {

    return (
        <div className='h-[60px] border-b border-primary items-center text-primary overflow-x-auto flex flex-row '>
            {options.map((option:ToolOptionType,i) => (
                <a 
                    className={`${option===currentPage ? 'underline' : null}  whitespace-nowrap px-6`}
                    key={'option_' + i}
                    onClick={()=>setCurrentPage(option)}
                >{option.name}</a>
            ))}
        </div>
    )
}

export default Toolbar