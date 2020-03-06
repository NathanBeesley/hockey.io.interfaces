export interface iConference {
    id?: number
    name?: string
    link?: string
    abbreviation: string
    shortName: string
    active: boolean
}

export enum conferences {
    eastern = 'Eastern',
    western = 'Western'
}