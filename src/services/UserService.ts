import UserRepository from '../repository/UserRepository'
import User from '../types/entity/User'

class UserService {
	getByEmail = async (email: string): Promise<User | undefined> => {
		return UserRepository.getByCpf(email)
	}
}

export default new UserService()
