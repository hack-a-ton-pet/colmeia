import Button from '@material-ui/core/Button'
import './styles.css'

const AppButton: React.FC<{
	onClick: () => void
}> = ({ children, onClick }) => {
	return (
		<Button className='appbutton' onClick={onClick} variant='contained'>
			{children}
		</Button>
	)
}

export default AppButton
