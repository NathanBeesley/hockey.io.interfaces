import { Venue } from './Venue'
import { Division } from './Division'
import { Conference } from './Conference'
import { Franchise } from './Franchise'

export interface Team {
    id?: TeamID
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

export enum TeamID {
    new_jersey_devils = 1,
    new_york_islanders = 2,
    new_york_rangers = 3,
    philadelphia_flyers = 4,
    pittsburgh_penguins = 5,
    boston_bruins = 6,
    buffalo_sabres = 7,
    montreal_canadians = 8,
    ottawa_senators = 9,
    toronto_maple_leafs = 10,
    carolina_hurricanes = 12,
    florida_panthers = 13,
    tampa_bay_lightning = 14,
    washington_capitals = 15,
    chicago_blackhawks = 16,
    detroit_red_wings = 17,
    nashville_predators = 18,
    st_louis_blues = 19,
    calgary_flames = 20,
    colorado_avalanche = 21,
    edmonton_oilers = 22,
    vancouver_cannucks = 23,
    anaheim_ducks = 24,
    dallas_stars = 25,
    los_angles_kings = 26,
    san_jose_sharks = 28,
    columbus_blue_jackets = 29,
    minnesota_wild = 30,
    winnipeg_jets = 52,
    arizona_coyotes = 53,
    vegas_golden_knights = 54,
    seattle_kraken = 55,
}
