export interface Milestone {
    id?: {
        gameId?: number
        seasonId?: number
        skaterId?: number
    }
    activePlayer?: number
    ageInDaysForYear?: number
    ageInYears?: number
    emptyNetGoals?: number
    gameDate?: string
    gameId?: number
    gameTypeId?: number
    goalie1FirstName?: string
    goalie1Id?: number
    goalie1LastName?: string
    goalie2FirstName?: string
    goalie2Id?: number
    goalie2LastName?: string
    goals?: number
    homeScore?: number
    homeTeamId?: number
    homeTriCode?: string
    penaltyShotGoals?: number
    seasonId?: number
    skaterFirstName?: string
    skaterId?: number
    skaterLastName?: string
    skaterTeamId?: number
    skaterTeamName?: string
    visitorScore?: number
    visitorTeamId?: number
    visitorTriCode?: string
}
