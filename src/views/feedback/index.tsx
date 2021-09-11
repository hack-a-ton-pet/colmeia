import { Header } from '../presentation'
import { ReactComponent as FigmaSVG } from '../../assets/figma.svg'
import { TextField } from '@material-ui/core'
import { useState } from 'react'
import AppButton from '../../components/button'
import FeedbackService from '../../services/FeedbackService'
import './styles.css'

const MAX_FEEDBACK_SIZE = 3000

const Feedback: React.FC = () => {
	const [feedback, setFeedback] = useState('')

	const handleChangeFeedback = (
		event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => {
		setFeedback(event.target.value.substring(0, MAX_FEEDBACK_SIZE))
	}

	const handleSendFeedback = () => {
		FeedbackService.sendFeedback(feedback)
	}

	return (
		<div className='feedback'>
			<Header />
			<div className='body'>
				<h2 className='title'>
					Infelizmente o App ainda está em desenvolvimento
				</h2>
				<p className='content'>
					Mas ficamos muito felizes em saber do seu interesse, por favor acesse
					o nosso protótipo e deixe seu feedback.
				</p>
				<div className='link'>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.figma.com/proto/MnYnOIRgTBnOko128thAJs/ForCa-2.0-novo-nós-que-fizemoxs?node-id=102%3A412&scaling=scale-down&page-id=102%3A167&starting-point-node-id=102%3A412'
						className='figma-box'
					>
						<FigmaSVG className='figma' />
					</a>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.figma.com/proto/MnYnOIRgTBnOko128thAJs/ForCa-2.0-novo-nós-que-fizemoxs?node-id=102%3A412&scaling=scale-down&page-id=102%3A167&starting-point-node-id=102%3A412'
					>
						Veja nosso lindo protótipo navegável
					</a>
				</div>
				<div className='feedback-container'>
					<label className='feedback-label' htmlFor='feedback'>
						Deixe aqui o seu feedback (críticas, sugestões e ideias):
					</label>
					<TextField
						id='feedback'
						className='feedback-input'
						multiline
						defaultValue=''
						variant='filled'
						value={feedback}
						onChange={handleChangeFeedback}
						InputProps={{ disableUnderline: true }}
					/>
					<AppButton onClick={handleSendFeedback}>Enviar</AppButton>
				</div>
			</div>
		</div>
	)
}

export { Feedback }
