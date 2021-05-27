import { Player } from '../interface/Player'

export interface Roster {
    person?: Pick<Player, 'id' | 'fullName' | 'link'>
    jerseyNumber?: string
    position?: Position
}

export interface Position {
    abbrev?: PositionCodeAbbrev
    code?: Position
    fullName?: PositionName
    type?: PositionType
}

export enum PositionCodeAbbrev {
    G = 'G',
    D = 'D',
    R = 'RW',
    L = 'LW',
    C = 'C',
    N_A = 'N/A',
    Head_Coach = 'Head Coach',
}

export enum PositionCodes {
    G = 'G',
    D = 'D',
    R = 'R',
    L = 'L',
    C = 'C',
    N_A = 'N/A',
    Head_Coach = 'Head Coach',
}

export enum PositionName {
    Goalie = 'Goalie',
    Defenseman = 'Defenseman',
    Right_wing = 'Right Wing',
    Left_wing = 'Left Wing',
    Center = 'Center',
    N_A = 'N/A',
    Head_Coach = 'Head Coach',
}

export enum PositionType {
    Goalie = 'Goalie',
    Defenseman = 'Defenseman',
    Forward = 'Forward',
    N_A = 'N/A',
    Coach = 'Coach',
}
