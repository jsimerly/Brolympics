export type ToolOptionType = {
    name: string, 
    fc: any
}

export type TeamType = {
    id:number,
    name:string, 
    player1:string, 
    player2:string, 
    score:number
}

export type EventRankingType = {
    team: TeamType,
    rank: number,
    score: number,
    record: [number, number, number]
}


export type EventType = {
    name: string, 
    completed: boolean, 
    available: boolean,
    rankings: EventRankingType[]|null
}

export type CompetitionTypeH2H= {
    id: number, 
    teams:[TeamType, TeamType], 
    event:EventType, 
    active: boolean, 
    completed: boolean, 
    winner:TeamType|null,
    score: [number, number] | null,
}

export type CompetitionTypeInd= {
    id: number, 
    team:TeamType, 
    event:EventType, 
    active: boolean, 
    completed: boolean, 
    score: number,
}

export type CompetitionTypeMany= {
    id: number, 
    teams:TeamType[], 
    event:EventType, 
    active: boolean, 
    completed: boolean, 
    rank: TeamType[],
}

export type CompetitionTypeH2H_Light = {
    id: number,
    teams: TeamType[],
    
}