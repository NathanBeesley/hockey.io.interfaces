import { Venue } from '../interface/Venue'
import { Team } from '../interface/Team'

export interface Schedule {
    totalItems?: number
    totalEvents?: number
    totalGames?: number
    totalMatches?: number
    wait?: number
}

export interface Dates {
    data?: string
    totalItems?: number
    totalEvents?: number
    totalGames?: number
    totalMatches?: number
    wait?: number
    games?: Array<Games>
}

export interface TeamRecord {
    leagueRecord?: {
        wins?: number
        losses?: number
        ot?: number
        type?: string
    }
    score?: number
    team?: Pick<Team, 'id' | 'name' | 'link'>
}

export interface Games {
    gamePk?: number
    link?: string
    gameType?: GameTypeID
    season?: string
    gameDate?: string
    status?: {
        abstractGameState?: string
        codedGameState?: string
        detailedState?: string
        statusCode?: string
        startTimeTBD?: boolean
    }
    teams?: {
        away?: TeamRecord
        home?: TeamRecord
    }
    venue?: Pick<Venue, 'name' | 'link'>
    content?: {
        link?: string
    }
}

export enum GameTypeID {
    PR = 'PR',
    R = 'R',
    P = 'P',
    A = 'A',
    WA = 'WA',
    O = 'O',
    WCOH_EXH = 'WCOH_EXH',
    WCOH_PRELIM = 'WCOH_PRELIM',
    WCOH_FINAL = 'WCOH_FINAL',
}
