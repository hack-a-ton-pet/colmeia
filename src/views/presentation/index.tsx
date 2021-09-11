import React from 'react'
import commentPNG from '../../assets/screens/comment.png'
import professorPNG from '../../assets/screens/professor.png'
import { ReactComponent as LogoSVG } from '../../assets/logo.svg'
import AppButton from '../../components/button'
import TextConstants from '../../constants/Name'
import './styles.css'
import PathConstants from '../../constants/Path'
import HistoryService from '../../services/HistoryService'

export const Header = () => {
	return (
		<div className='header'>
			<LogoSVG className='header__wrapper_svg' />
			<div className='header__wrapper'>
				<h1 className='header__wrapper__title'>{TextConstants.NAME}</h1>
				<h2 className='header__wrapper__subtitle'>
					{TextConstants.SUBHEADER_LOGO}
				</h2>
			</div>
		</div>
	)
}

export const ContentPresentation = () => {
	const handleAccessApp = () => {
		HistoryService.push(PathConstants.FEEDBACK)
	}
	return (
		<div className='content_presentation'>
			<div className='content_presentation__image_wrapper'>
				<img
					alt='Imagem da tela de aplicativo mostrando um comentário sobre um professor'
					className='content_presentation__image_wrapper__img comment'
					src={commentPNG}
				/>
				<img
					alt='Imagem da tela de aplicativo mostrando um professor'
					className='content_presentation__image_wrapper__img professor'
					src={professorPNG}
				/>
			</div>
			<div>
				{TextConstants.PRESENTATION_ARR.map(t => (
					<p className='content_presentation__text'>{t}</p>
				))}
				<AppButton onClick={handleAccessApp}>Acesse agora!</AppButton>
			</div>
		</div>
	)
}

export const Presentation = () => {
	return (
		<div>
			<Header />
			<ContentPresentation />
		</div>
	)
}
