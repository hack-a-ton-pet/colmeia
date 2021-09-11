import React from 'react'
import { ReactComponent as LogoSVG } from '../../assets/logo.svg'
import NameConstants from '../../constants/Name'
import './styles.css'

export const Header = () => {
	return (
		<div className='header'>
			<LogoSVG className='header__logo_svg' />
			<h1 className='header__logo'>{NameConstants.NAME}</h1>
		</div>
	)
}

export const View1 = () => {
	return (
		<div>
			<Header />
		</div>
	)
}
