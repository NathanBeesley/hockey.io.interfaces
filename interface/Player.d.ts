import { Position, PositionName, PositionType, PositionCodeAbbrev } from './Roster';
import { Team } from "./Team"

export interface Player {
    id?: number
    fullName?: string
    link?: string
    firstName?: string
    lastName?: string
    primaryNumber?: number
    birthdate?: string
    currentAge?: number
    birthCity?: string
    birthCountry?: string
    nationality?: string
    height?: string
    weight?: number
    active?: boolean
    alternateCaptian?: boolean
    captain?: boolean
    rookie?: boolean
    shootsCatches?: string
    rosterStatus?: string
	currentTeam?: Pick<Team, | "id" | "name" | "link">
    primaryPosition?: PrimaryPosition
}
export interface PrimaryPosition {
	code?: Position
	name?: PositionName
	type?: PositionType
	abbrev?: PositionCodeAbbrev
}

export interface StatType {
    type?: { displayName?: string }
}
export interface PlayerStats {
    season?: string;
    stat?: any;
}
export interface PlayerStat {
    timeOnIce?: string
    assists?: number
    goals?: number
    pim?: number
    shots?: number
    games?: number
    hits?: number
    powerPlayGoals?: number
    powerPlayPoints?: number
    powerPlayTimeOnIce?: string
    evenTimeOnIce?: string
    penaltyMinutes?: string
    faceOffPct?: number
    shotPct?: number
    gameWinningGoals?: number
    overTimeGoals?: number
    shortHandedGoals?: number
    shortHandedPoints?: number
    shortHandedTimeOnIce?: string
    blocked?: number
    plusMinus?: number
    points?: number
    shifts?: number
    timeOnIcePerGame?: string
    evenTimeOnIcePerGame?: string
    shortHandedTimeOnIcePerGame?: string
    powerPlayTimeOnIcePerGame?: string
}