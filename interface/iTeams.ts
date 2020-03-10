import { iVenue } from "./iVenue";
import { iDivision } from "./iDivision";
import { iConference } from "./iConference";
import { iFranchise } from "./iFranchise";

export interface team {
    id?: number
    name?: string
    link?: string
    venue?: iVenue
    abbreviation?: string
    teamName?: string
    locationName?: string
    firstYearOfPlay?: string
    division?: iDivision
    conference?: iConference
    franchise?: iFranchise
    shortName?: string
    officialSiteUrl?: string
    franchiseId?: number
    active?: boolean
}