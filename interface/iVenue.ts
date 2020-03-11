import { timeZone } from "./iCommon"

export interface iVenue {
    id?: number
    name?: string
    link?: string
    city?: string
    timeZone?: timeZone
}