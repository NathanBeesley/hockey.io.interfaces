import { iConference } from "./iConference";

export interface iDivision {
    id?: number
    name?: divisions
    nameShort?: string
    link?: string
    abbreviation?: string
    conference?: iConference
    active?: boolean
}

export enum divisions {
    central = 'Central',
    pacific = 'Pacific',
    atlantic = 'Atlantic',
    metropolitan = 'Metropolitan'
}