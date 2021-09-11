import Entity from './Entity'

export default interface User extends Entity {
	email: string
	password: string
	registrationCode: string
}
