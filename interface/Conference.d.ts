export interface Conference {
    id?: number
    name?: string
    link?: string
    abbreviation?: string
    shortName?: string
    active?: boolean
}

export declare enum Conferences {
    eastern = 5,
    western = 6
}