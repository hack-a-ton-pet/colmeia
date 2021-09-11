import './App.css'
import Main from './views'
import { AuthProvider } from './context/Auth'

function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<Main />
			</AuthProvider>
		</div>
	)
}

export default App
