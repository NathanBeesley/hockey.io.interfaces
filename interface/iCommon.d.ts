export interface iTimezone {
    id?: string;
    offset?: number;
    tz?: string;
}
export declare enum timzones {
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
