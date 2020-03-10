export interface iTimezone {
    id?: string;
    offset?: number;
    tz?: timeZones;
}
export declare enum timeZones {
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
