import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import Path from '../constants/Path'
import { Presentation } from './presentation'
import NotFound from './not_found'
import { Feedback } from './feedback'
import HistoryService from '../services/HistoryService'

const Main: React.FC = () => {
	return (
		<Router history={HistoryService}>
			<Switch>
				<Route exact path={Path.PRESENTATION} component={Presentation} />
				<Route exact path={Path.FEEDBACK} component={Feedback} />
				<Route path={'/'} component={NotFound} />
			</Switch>
		</Router>
	)
}

export default Main
