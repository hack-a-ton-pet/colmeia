import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import Path from '../constants/Path'
import HistoryService from '../services/HIstoryService'
import NotFound from './not_found'

const Main: React.FC = () => {
	return (
		<Router history={HistoryService}>
			<Switch>
				<Route exact path={Path.LOGIN} component={() => <></>} />
				<Route exact path={Path.REGISTER} component={() => <></>} />
				<Route path={'/'} component={NotFound} />
			</Switch>
		</Router>
	)
}

export default Main
