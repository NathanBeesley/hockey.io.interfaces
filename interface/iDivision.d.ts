import { Conference } from './iConference'
export interface Division {
    id?: number
    name?: Divisions
    nameShort?: string
    link?: string
    abbreviation?: string
    conference?: Conference
    active?: boolean
}
export declare enum Divisions {
    central = 'Central',
    pacific = 'Pacific',
    atlantic = 'Atlantic',
    metropolitan = 'Metropolitan'
}
