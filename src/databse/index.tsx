import Dexie from 'dexie'
import Table from '../types/entity/Table'
import User from '../types/entity/User'

const NAME = 'COLMEIA'
const VERSION = 1

class Database extends Dexie {
	user: Table<User>

	constructor() {
		super(NAME)

		this.version(VERSION).stores({
			user: generateIndexes('email'),
		})

		this.user = this.table('user')
	}
}

const generateIndexes = (...properties: string[]): string => {
	if (properties.length > 0) {
		return `${getDefaultIndex()},${properties.join(',')}`
	}
	return getDefaultIndex()
}

const getDefaultIndex = (): string => {
	return '++id'
}

export default new Database()
