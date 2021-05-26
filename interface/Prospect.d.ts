import { PrimaryPosition } from './Player'

interface Prospect {
	id?: number
	fullName?: string
	link?: string
	firstName?: string
	lastName?: string
	birthDate?: string
	birthCity?: string
	birthStateProvince?: string
	birthCountry?: string
	height?: string
	weight?: number
	shootsCatches?: string
	primaryPosition?: PrimaryPosition
	draftStatus?: string
	prospectCategory?: {
		id?: number,
		shortName?: string
		name?: string
	},
	amateurTeam?: {
		name?: string
		link?: string
	},
	amateurLeague?: {
		name?: string
		link?: string
	},
	ranks?: object
}