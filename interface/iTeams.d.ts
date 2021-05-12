import { Venue } from "./iVenue"
import { Division } from "./iDivision"
import { Conference } from "./iConference"
import { Franchise } from "./iFranchise"
export interface team {
    id?: number
    name?: string
    link?: string
    venue?: Venue
    abbreviation?: string
    teamName?: string
    locationName?: string
    firstYearOfPlay?: string
    division?: Division
    conference?: Conference
    franchise?: Franchise
    shortName?: string
    officialSiteUrl?: string
    franchiseId?: number
    active?: boolean
}
