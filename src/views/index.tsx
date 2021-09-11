import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import Path from '../constants/Path'
import HistoryService from '../services/HIstoryService'
import Login from './login'
import NotFound from './not_found'
import Register from './register'

const Main: React.FC = () => {
	return (
		<Router history={HistoryService}>
			<Switch>
				<Route exact path={Path.LOGIN} component={Login} />
				<Route exact path={Path.REGISTER} component={Register} />
				<Route path={'/'} component={NotFound} />
			</Switch>
		</Router>
	)
}

export default Main
