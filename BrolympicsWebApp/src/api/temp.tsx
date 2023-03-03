import { TeamType, EventType, CompetitionTypeH2H, EventRankingType } from "../types"

export const allTeams: TeamType[] = [
    {id:1, name: 'El Salvador', player1: 'Jacob', player2:'Javi', score:44},
    {id:2, name: 'Greece', player1: 'Timmy', player2:'Jake', score:55},
    {id:3, name: 'Germany', player1: 'Tanner', player2:'Max', score:42},
    {id:4, name: '3rd Dynasty of Ur', player1: 'Erik', player2:'Frank', score:45},
    {id:5, name: 'North Korea', player1: 'Conrad', player2:'Brady', score:53},
  ]

  const spikeballRanking: EventRankingType[] = [
    {
        team: allTeams[0],
        rank: 1,
        score: 10,
        record: [3, 0, 0]
    },
    {
        team: allTeams[1],
        rank: 2,
        score: 8,
        record: [2, 1, 0]
    },
    {
        team: allTeams[2],
        rank: 3,
        score: 7,
        record: [1, 2, 0]
    },
    {
        team: allTeams[3],
        rank: 3,
        score: 5,
        record: [0, 3, 0]
    },
  ]

  const spikeballEvent: EventType = {
    name: 'Spikeball',
    completed: false,
    available:false,
    rankings: spikeballRanking,
  }
  const cornholeEvent: EventType = {
    name: 'Cornhole',
    completed: false,
    available: false,
    rankings: null
  }
  const volleyballEvent: EventType = {
    name: 'Volleyball',
    completed: false,
    available: false,
    rankings: null
  }
  const pongEvent: EventType = {
    name: 'Pong',
    completed: false,
    available: false,
    rankings: null
  }

  export const team1TeamComps: CompetitionTypeH2H[] = [
    {
        id: 1, 
        teams:[allTeams[0], allTeams[1]],
        event: spikeballEvent,
        active: false,
        completed: true,
        winner: allTeams[1],
        score: [16, 21],
      },
      {
        id: 2, 
        teams:[allTeams[0], allTeams[2]],
        event: cornholeEvent,
        active: false,
        completed: true,
        winner: allTeams[0],
        score: [21, 8],
      },
      {
        id: 3, 
        teams:[allTeams[0], allTeams[3]],
        event: volleyballEvent,
        active: false,
        completed: true,
        winner: allTeams[0],
        score: [11, 6]
      },
  ]

  export const allSpikeballComps: CompetitionTypeH2H[] = [
    {
        id: 1, 
        teams:[allTeams[0], allTeams[1]],
        event: spikeballEvent,
        active: false,
        completed: false,
        winner: null,
        score: null,
      },
      {
        id: 2, 
        teams:[allTeams[2], allTeams[3]],
        event: spikeballEvent,
        active: false,
        completed: true,
        winner: allTeams[2],
        score: [21, 8],
      },
      {
        id: 3, 
        teams:[allTeams[4], allTeams[1]],
        event: spikeballEvent,
        active: false,
        completed: true,
        winner: allTeams[1],
        score: [17, 21]
      },
  ]
  
  
  export const allEvents: EventType[] = [
    spikeballEvent,
    cornholeEvent,
    pongEvent,
    volleyballEvent
  ]

  export const allCompetitions: CompetitionTypeH2H[] = [
    {
      id: 1, 
      teams:[allTeams[0], allTeams[1]],
      event: spikeballEvent,
      active: false,
      completed: false,
      winner: null,
      score: null,
    },
    {
      id: 2, 
      teams:[allTeams[2], allTeams[3]],
      event: cornholeEvent,
      active: true,
      completed: false,
      winner: null,
      score: null,
    },
    {
      id: 3, 
      teams:[allTeams[4], allTeams[1]],
      event: spikeballEvent,
      active: false,
      completed: true,
      winner: allTeams[1],
      score: [17, 21]
    },
  ]