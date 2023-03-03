
import { allTeams, team1TeamComps } from "../api/temp"
import { TeamType } from "../types"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const TeamCard = ({team} : {team:TeamType}) => {
  return (
    <div className="w-full">
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-row w-full justify-start items-center">
          <h3 className="font-bold text-[24px]">{team.name}</h3>
          <span className="ml-1 text-[24px]"> - {team.score}</span>
        </div>
        <ExpandLessIcon/>
      </div>
      <div>
        {team1TeamComps.map((teamComp, i) =>(
          <div
            key={'teamcomps_1'+i}
          >
            {teamComp.teams[0].name} {teamComp.score ? teamComp.score[0] : null} - {teamComp.score ? teamComp.score[1] : null} {teamComp.teams[1].name}
          </div>
        ))}
      </div>

    </div>
  )
}

const MyTeam = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className='text-[40px] h-[50px]'>Teams</h2>
      <div className="w-full px-3">
        {allTeams.map((team,i) => (
          <TeamCard
            key={'teamcard_'+i}
            team={team}
          />
        ))}
      </div>
    </div>
  )
}

export default MyTeam