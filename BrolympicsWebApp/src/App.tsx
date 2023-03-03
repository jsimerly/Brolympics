import { useState } from "react"
import {Competitions, Toolbar, Leaderboard, NavBar, Events, MyTeam} from "./components"
import {ToolOptionType, EventType, CompetitionTypeH2H, TeamType} from './types'
import { allTeams, allEvents, allCompetitions } from "./api/temp"



const toolOptions: ToolOptionType[] = [
  {
    name: 'Competitions', 
    fc: <Competitions/>
  },
  {
    name: 'Leaderboard', 
    fc: <Leaderboard/>
  },
  {
    name: 'Events', 
    fc: <Events/>
  },
  {name: 'Teams', fc: <MyTeam/>},
]

const App = () => {
  const [currentPage, setCurrentPage] = useState(toolOptions[0])

  return (
    <div className='w-full bg-white relative'>
      <NavBar/>
      <Toolbar
        options={toolOptions}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {currentPage.fc}
    </div>
  )
}

export default App
