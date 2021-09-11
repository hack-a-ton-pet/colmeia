import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import Path from '../constants/Path'
import HistoryService from '../services/HIstoryService'
import NotFound from './not_found'
import { View1 } from './view1'

const Main: React.FC = () => {
	return (
		<Router history={HistoryService}>
			<Switch>
				<Route exact path={Path.VIEW_1} component={View1} />
				<Route exact path={Path.VIEW_2} component={() => <></>} />
				<Route path={'/'} component={NotFound} />
			</Switch>
		</Router>
	)
}

export default Main
