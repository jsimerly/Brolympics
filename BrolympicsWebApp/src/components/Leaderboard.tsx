import { TeamType } from "../types"
import { allTeams } from "../api/temp"


const Leaderboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-6">
        <h2 className='text-[40px] h-[50px]'>Leaderboard</h2>
        <table className="w-full border mx-6">
            <tbody>
                <tr>
                    <td className="text-center border font-bold">Rank</td>
                    <td className='border font-bold'><span className="ml-3">Team</span></td>
                    <td className='border font-bold text-center'>Score</td>
                </tr>
                {allTeams.map((team: TeamType,i)=>(
                    <tr className={`${i%2===0 ? 'bg-primaryLight' : null} text-[20px]`} key={'tablerow_'+i}>
                        <td className="text-center p-3">{i+1}</td>
                        <td className="border-l border-r"><span className="ml-3">{team.name}</span></td>
                        <td className="text-center">{team.score}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Leaderboard