import { iTimezone } from "./iCommon"

export interface iVenue {
    id?: number
    name?: string
    link?: string
    city?: string
    timezone?: iTimezone
}