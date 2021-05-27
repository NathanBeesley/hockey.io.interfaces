import { Player } from './Player'
import { Team } from './Team'

interface DraftByYear {
    id?: number
    ageInDays?: number
    ageInDaysForYear?: number
    ageInYears?: number
    amateurClubName?: string
    amateurLeague?: string
    birthDate?: string
    birthPlace?: string
    countryCode?: string
    csPlayerId?: number
    draftDate?: string
    draftMasterId?: number
    draftYear?: number
    draftedByTeamId?: number
    firstName?: string
    height?: number
    lastName?: string
    notes?: null
    overallPickNumber?: number
    pickInRound?: number
    playerId?: number
    playerName?: string
    position?: string
    removedOutright?: string
    removedOutrightWhy?: unknown
    roundNumber?: number
    shootsCatches?: string
    supplementalDraft?: string
    teamPickHistory?: string
    triCode?: string
    weight?: number
}

interface Draft {
    draftYear?: number
    rounds?: Array<Round>
}

interface Round {
    roundNumber?: number
    round?: number
    picks?: Array<Picks>
}

interface Picks {
    year?: number
    round?: string
    pickOverall?: number
    pickInRound?: number
    team?: Pick<Team, 'id' | 'name' | 'link'>
    prospect?: Pick<Player, 'id' | 'fullName' | 'link'>
}
