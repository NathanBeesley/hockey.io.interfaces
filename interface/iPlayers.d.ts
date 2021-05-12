import { team } from "./iTeams"
export interface Player {
    id?: number
    fullName?: string
    link: string
    firstName: string
    lastName: string
    primaryNumber: number
    birthdate: string
    currentAge: number
    birthCity: string
    birthCountry: string
    nationality: string
    height: string
    weight: number
    active: boolean
    alternateCaptian: boolean
    captain: boolean
    rookie: boolean
    shootsCatches: string
    rosterStatus: string
    currentTeam: team
    primaryPosition: PrimaryPosition
}
export interface PrimaryPosition {
    code: string
    name: string
    type: string
    abbreviation: string
}
export interface StatType {
    type: {
        displayName: string
    };
}
export interface Stats {
    season: string;
    stat: any;
}
export interface Stat {
    timeOnIce: string
    assists: number
    goals: number
    pim: number
    shots: number
    games: number
    hits: number
    powerPlayGoals: number
    powerPlayPoints: number
    powerPlayTimeOnIce: string
    evenTimeOnIce: string
    penaltyMinutes: string
    faceOffPct: number
    shotPct: number
    gameWinningGoals: number
    overTimeGoals: number
    shortHandedGoals: number
    shortHandedPoints: number
    shortHandedTimeOnIce: string
    blocked: number
    plusMinus: number
    points: number
    shifts: number
    timeOnIcePerGame: string
    evenTimeOnIcePerGame: string
    shortHandedTimeOnIcePerGame: string
    powerPlayTimeOnIcePerGame: string
}
