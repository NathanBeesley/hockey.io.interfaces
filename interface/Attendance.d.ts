import { TeamID } from './Team'

interface Attendance {
	id?: TeamID
	playoffAttendance?: number
	regularAttendance?: number
	seasonId?: number
	totalAttendance?: number
}