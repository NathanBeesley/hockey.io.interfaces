export interface TimeZone {
    id?: string
    offset?: number
    tz?: TimeZones
}
export declare enum TimeZones {
    est = "EST",
    edt = "EDT",
    cst = "CST",
    adt = "ADT",
    pst = "PST",
    nst = "NST",
    ndt = "NDT",
    mst = "MST",
    mdt = "MDT"
}
