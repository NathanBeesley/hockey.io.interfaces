export interface timeZone {
    id?: string
    offset?: number
    tz?: timeZones
}

export enum timeZones  {
    est = 'EST',
    edt = 'EDT',
    cst = 'CST',
    adt = 'ADT',
    pst = 'PST',
    nst = 'NST',
    ndt = 'NDT',
    mst = 'MST',
    mdt = 'MDT'
}