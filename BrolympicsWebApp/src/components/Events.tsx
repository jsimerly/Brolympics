import { CompetitionTypeH2H, EventType } from "../types"
import { allEvents } from "../api/temp"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const EventCard = ({event} : {event:EventType}) => (
  <div className="w-full px-2">
    <div className="w-full flex flex-row justify-between items-center">
      <h3 className="font-bold text-[24px]">{event.name}</h3>
      <ExpandLessIcon/>
    </div>

    <table className="w-full border">
      <tbody>
        <tr className="font-bold border">
          <td className="text-center border-r">Rank</td>
          <td className="border-r">Team</td>
          <td className="text-center border-r">Record</td>
          <td className="text-center">Score</td>
        </tr>
        {event.rankings?.map((rank, i) => {
          return (
            <tr key={'rankrow_'+i}>
              <td className="text-center border-r">{rank.rank}</td>
              <td className="border-r">{rank.team.name}</td>
              <td className="text-center border-r">{rank.record[0]} - {rank.record[1]}</td>
              <td className="text-center">{rank.score}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
    <div>
      All Event Comps
    </div>
  </div>
)

const CompCard = () => {

}

const Events: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className='text-[40px] h-[50px]'>Events</h2>
      <div className="w-full flex flex-col items-center justify-center">
        {allEvents.map((event, i) => (
          <EventCard
            key={'eventcard_'+i}
            event={event}
          />
        ))}
      </div>
    </div>
  )
}

export default Events