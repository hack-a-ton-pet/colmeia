import UserRepository from '../repository/UserRepository'
import AsyncResult from '../types/AsyncResult'
import User from '../types/entity/User'
import UserService from './UserService'

class RegisterService {
	register = async (
		email: string,
		password: string,
		registerCode: string,
		confirmPassword: string,
	): Promise<AsyncResult<User>> => {
		if (this.isInvalidConfirmPassword(password, confirmPassword))
			return this.invalidConfirmPasswordResult()

		if (await this.userAlreadyExists(email))
			return this.userAlreadExistsResult()

		return this.saveUser(email, password, registerCode)
	}

	private isInvalidConfirmPassword = (
		password: string,
		confirmPassword: string,
	) => {
		return password !== confirmPassword
	}

	private saveUser = async (
		email: string,
		password: string,
		registerCode: string,
	): Promise<AsyncResult<User>> => {
		const user = await UserRepository.save({
			email: email,
			password: password,
			registrationCode: registerCode,
		})

		return this.successResult(user)
	}

	private successResult = (user: User): AsyncResult<User> => {
		return {
			content: user,
			errors: [],
			hasError: false,
		}
	}

	private userAlreadExistsResult = (): AsyncResult<User> => {
		return {
			content: undefined,
			errors: ['Email já cadastrado.'],
			hasError: true,
		}
	}

	private invalidConfirmPasswordResult = (): AsyncResult<User> => {
		return {
			content: undefined,
			errors: ['Confirmação de senha inválida.'],
			hasError: true,
		}
	}

	private userAlreadyExists = async (email: string): Promise<boolean> => {
		const user = await UserService.getByEmail(email)
		return user !== undefined
	}
}

export default new RegisterService()
