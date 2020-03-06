import { iVenue } from "./iVenue";
import { iDivision } from "./iDivision";
import { iConference } from "./iConference";
import { iFranchise } from "./iFranchise";
export interface iTeam {
    id?: string;
    name?: string;
    link?: string;
    venue?: iVenue;
    abbreviation?: string;
    teamName?: string;
    locationName?: string;
    firstYearOfPlay?: string;
    division?: iDivision;
    conference?: iConference;
    franchise?: iFranchise;
    shortName?: string;
    officialSiteUrl?: string;
    franchiseId?: number;
    active?: boolean;
}
