import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { CompetitionTypeH2H } from "../types"
import { allCompetitions } from '../api/temp';

const CompCardH2H: React.FC<{compData:CompetitionTypeH2H}> = ({compData}) => {

  return (
    <div className="w-full p-2 border-2 border-primary">
      <div className="w-full text-center font-bold text-[14px]">
        {compData.event.name}
      </div>
      <div className="flex flex-row justify-center items-center text-[20px]">
        <span 
          className={`w-[45%] truncate text-end ${compData.teams[0].id === compData.winner?.id ? 'font-bold' : null}`}
        >
          {compData.teams[0].name}
        </span>
        <span className="mx-2 text-center"> v </span>
          <span 
            className={`w-[45%] truncate text-start ${compData.teams[1].id === compData.winner?.id ? 'font-bold' : null}`}
          >
            {compData.teams[1].name}
          </span>
      </div>
      <div className={`flex w-full justify-center items-center ${compData.completed ? null : 'hidden'}`}>
        <span>{compData.score ? compData.score[0] : null}</span>
        <span className='mx-2'> :</span>
        <span>{compData.score ? compData.score[1] : null}</span>
      </div>

    </div>
  )
}

//Need to edit this type later once more comp types are added
const Competitions: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-6">
      <h2 className='text-[40px] h-[50px]'>Competitions</h2>
      <div className="flex flex-row justify-between items-center w-full">
        <h3 className='font-bold text-[20px]'>
          Active
        </h3>
        <ExpandLessIcon/>
      </div>
      <div className="w-full my-1 mx-6">
      {allCompetitions.map((comp, i) => {
            if (comp.active === true){
              return (
                <div className='border border-green-300'>
                  <CompCardH2H
                    compData={comp}
                  />
                </div>
              )
            }
            return null
          })}
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h3 className='font-bold text-[20px]'>
          On Deck
        </h3>
        <ExpandMoreIcon/>
      </div>
      <div className="w-full mx-6">
        {allCompetitions.map((comp, i) => {
              if (comp.completed === false && comp.active === false){
                return (
                  <CompCardH2H
                    compData={comp}
                  />
                )
              }
              return null
            })}
        </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h3 className='font-bold text-[20px]'>
          Completed
        </h3>
        <ExpandMoreIcon/>
      </div>
      <div className="w-full mx-6">
        {allCompetitions.map((comp, i) => {
              if (comp.completed === true){
                return (
                  <CompCardH2H
                    compData={comp}
                  />
                )
              }
              return null
            })}
        </div>
      </div>
  )
}

export default Competitions