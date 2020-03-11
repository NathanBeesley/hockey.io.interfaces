import { team } from "./iTeams";
export interface player {
    id?: number;
    fullName?: string;
    link: string;
    firstName: string;
    lastName: string;
    primaryNumber: number;
    birthdate: string;
    currentAge: number;
    birthCity: string;
    birthCountry: string;
    nationality: string;
    height: string;
    weight: number;
    active: boolean;
    alternateCaptian: boolean;
    captain: boolean;
    rookie: boolean;
    shootsCatches: string;
    rosterStatus: string;
    currentTeam: team;
    primaryPosition: primaryPosition;
}
export interface primaryPosition {
    code: string;
    name: string;
    type: string;
    abbreviation: string;
}
export interface statType {
    type: {
        displayName: string;
    };
}
export interface stats {
    season: string;
    stat: any;
}
export interface stat {
    timeOnIce: string;
    assists: number;
    goals: number;
    pim: number;
    shots: number;
    games: number;
    hits: number;
    powerPlayGoals: number;
    powerPlayPoints: number;
    powerPlayTimeOnIce: string;
    evenTimeOnIce: string;
    penaltyMinutes: string;
    faceOffPct: number;
    shotPct: number;
    gameWinningGoals: number;
    overTimeGoals: number;
    shortHandedGoals: number;
    shortHandedPoints: number;
    shortHandedTimeOnIce: string;
    blocked: number;
    plusMinus: number;
    points: number;
    shifts: number;
    timeOnIcePerGame: string;
    evenTimeOnIcePerGame: string;
    shortHandedTimeOnIcePerGame: string;
    powerPlayTimeOnIcePerGame: string;
}
