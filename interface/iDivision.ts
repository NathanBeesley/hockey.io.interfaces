import { conference } from "./iConference";

export interface division {
    id?: number
    name?: divisions
    nameShort?: string
    link?: string
    abbreviation?: string
    conference?: conference
    active?: boolean
}

export enum divisions {
    central = 'Central',
    pacific = 'Pacific',
    atlantic = 'Atlantic',
    metropolitan = 'Metropolitan'
}