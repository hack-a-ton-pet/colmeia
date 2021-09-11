import React, { useReducer } from 'react'
import ContextAction from '../types/ContextAction'
import User from '../types/entity/User'

enum AuthActionType {
	LOGIN,
	LOGOUT,
}

interface AuthState {
	user: User | undefined
	isAuthenticated: boolean
}

interface AuthContext {
	state: AuthState
	dispatch: React.Dispatch<ContextAction<User | undefined, AuthActionType>>
}

const initialState: AuthState = {
	user: undefined,
	isAuthenticated: false,
}

const initialContext: AuthContext = {
	state: initialState,
	dispatch: () => {},
}

const authStore = React.createContext(initialContext)
const { Provider } = authStore

const AuthProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(
		(
			context: AuthState,
			action: ContextAction<User | undefined, AuthActionType>,
		) => {
			switch (action.type) {
				case AuthActionType.LOGIN:
					return {
						user: action.data,
						isAuthenticated: true,
					}
				case AuthActionType.LOGOUT:
					return initialState
				default:
					throw new Error()
			}
		},
		initialState,
	)

	return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { authStore, AuthProvider, AuthActionType }
