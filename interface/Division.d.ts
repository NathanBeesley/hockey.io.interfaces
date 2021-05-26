import { Conference } from './Conference'

export interface Division {
    id?: number
    name?: Divisions
    nameShort?: string
    link?: string
    abbreviation?: string
    conference?: Conference
    active?: boolean
}

export enum DivisionIds {
	// Archived
	Central = 16,
	Western = 15, 
	Atlantic = 1,
	Pacific = 6,
	American = 8,
	Canadian = 7,
	// New
	Discover_Central = 26,
	Honda_West = 27,
	Mass_Mutual_East = 25,
	Scotia_North = 28
}

export declare enum Divisions {
	// Archived
	central = "Central",
	western = "Western",
	atlantic = "Atlantic",
	pacific = "Pacific",
	american = "American",
	canadian = "Canadian",
	// New
    discover_central = 'Discover Central',
    honda_west = 'Honda West',
    massmutual_east = 'MassMutual East',
    scotia_north = 'Scotia North'
}
