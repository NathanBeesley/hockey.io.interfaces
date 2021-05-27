import { GameTypeID } from './Schedule.d'

export interface TimeZone {
    id?: string
    offset?: number
    tz?: TimeZones
}

interface Copyright {
    copyright?: string
}

export interface Response<T> extends Copyright {
    data?: Array<T>
}

export interface GameType {
    id?: GameTypeID
    description?: string
    postseason?: boolean
}
export declare enum TimeZones {
    est = 'EST',
    edt = 'EDT',
    cst = 'CST',
    adt = 'ADT',
    pst = 'PST',
    nst = 'NST',
    ndt = 'NDT',
    mst = 'MST',
    mdt = 'MDT',
}
