import { GameType } from './Common';


export interface SeriesCode {
	seriesCode?: SeriesCodes
}

export interface Standing {
	name?: StandingCode
	description?: string
}

export interface StatTypes {
	displayName?: string
	gameType?: GameType
}


export interface GameStatus {
	code?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9",
	abstractGameState?: string,
	detailedState?: string,
	baseballCode?: string,
	startTimeTB?: boolean
}

interface PlayTypes {
	playerType?: PlayerTypeCodes
}

export interface PlayType {
	name?: string
	id?: string
	cmsKey?: string
	playerTypes?: Array<PlayTypes>
	code?: GameEventCodes
	secondaryEventCodes?: Array<any>
}

export enum GameEventCodes {
	Unknown = "Unknown",
	Faceoff = "Faceoff",
	Hit = "Hit",
	Giveaway = "Giveaway",
	Goal = "Goal",
	Shot = "Shot",
	Missed_Shot = "Missed Shot",
	Penalty = "Penalty",
	Stoppage = "Stoppage",
	Sub = "Sub",
	Fight = "Fight",
	Takeaway = "Takeaway",
	Blocked_Shot = "Blocked Shot",
	Period_Start = "Period Start",
	Period_End = "Period End",
	Game_End = "Game End",
	Game_Scheduled = "Game Scheduled",
	Period_Ready = "Period Ready",
	Period_Official = "Period Official",
	Shootout_Complete = "Shootout Complete",
	Early_Intermission_Start = "Early Intermission Start",
	Early_Intermission_End = "Early Intermission End",
	Game_Official = "Game Official",
	Official_Challenge = "Official Challenge",
	Emergency_Goaltender_Player_ID_Change = "Emergency Goaltender Player ID Change"
}

export enum StandingCode {
	regularSeason = "regularSeason",
	wildCard = "wildCard",
	divisionLeaders = "divisionLeaders",
	wildCardWithLeaders = "wildCardWithLeaders",
	preseason = "preseason",
	postseason = "postseason",
	byDivision = "byDivision",
	byConference = "byConference",
	byLeague = "byLeague"
}

export enum SeriesCodes {
	A = "A",
	B = "B",
	C = "C",
	D = "D",
	E = "E",
	F = "F",
	G = "G",
	H = "H",
	I = "I",
	J = "J",
	K = "K",
	L = "L",
	M = "M",
	N = "N",
	O = "O"
}

export enum PlayerTypeCodes {
	// Face off
	Winner = "Winner",
	Loser = "Loser",
	// Hit
	Hitter = "Hitter",
	Hittee = "Hittee",
	// Giveaway/Takeaway
	PlayerID = "PlayerID",
	// Goal
	Scorer = "Scorer",
	Assist = "Assist",
	// Shot/Missed Shot/Blocked Shot
	Shooter = "Shooter",
	Goalie = "Goalie",
	// Penalty
	PenaltyOn = "PenaltyOn",
	DrewBy = "DrewBy",
	ServedBy = "ServedBy",
	// Fight
	Fighter = "Fighter",
	// Blocked Shot
	Blocker = "Blocker"
}