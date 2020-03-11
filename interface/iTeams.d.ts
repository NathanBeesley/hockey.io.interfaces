import { venue } from "./iVenue";
import { division } from "./iDivision";
import { conference } from "./iConference";
import { franchise } from "./iFranchise";
export interface team {
    id?: number;
    name?: string;
    link?: string;
    venue?: venue;
    abbreviation?: string;
    teamName?: string;
    locationName?: string;
    firstYearOfPlay?: string;
    division?: division;
    conference?: conference;
    franchise?: franchise;
    shortName?: string;
    officialSiteUrl?: string;
    franchiseId?: number;
    active?: boolean;
}
