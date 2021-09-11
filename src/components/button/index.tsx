import Button from '@material-ui/core/Button'
import './styles.css'

const AppButton: React.FC<{
	text: string
	onClick: () => void
}> = ({ text, onClick }) => {
	return (
		<Button
			className='appbutton'
			onClick={onClick}
			variant='contained'
			color='secondary'
		>
			{text}
		</Button>
	)
}

export default AppButton
