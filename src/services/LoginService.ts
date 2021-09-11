import UserService from './UserService'
import AsyncResult from '../types/AsyncResult'
import User from '../types/entity/User'

class LoginService {
	login = async (
		email: string,
		password: string,
	): Promise<AsyncResult<User>> => {
		const user = await UserService.getByEmail(email)

		if (this.isValidUserInput(user, password)) {
			return this.loginResult(user!!)
		}

		return this.invalidLoginResult()
	}

	private isValidUserInput = (
		user: User | undefined,
		password: string,
	): boolean => {
		const userExists = user !== undefined
		if (userExists) {
			return this.isValidUserPassword(user!!, password)
		}

		return false
	}

	private loginResult = (user: User): AsyncResult<User> => {
		return {
			content: user,
			errors: [],
			hasError: false,
		}
	}

	private invalidLoginResult = (): AsyncResult<User> => {
		return {
			content: undefined,
			errors: ['Login inválido.'],
			hasError: true,
		}
	}

	private isValidUserPassword = (user: User, password: string): boolean => {
		return user.password === password
	}
}

export default new LoginService()
