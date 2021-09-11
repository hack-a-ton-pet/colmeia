import Path from '../constants/Path'

class FeedbackService {
	sendFeedback = async (feedback: string) => {
		const body = {
			feedback: feedback,
		}
		const fetchData = {
			method: 'POST',
			body: JSON.stringify(body),
			headers: new Headers(),
		}
		const response = await fetch(Path.SEND_FEEDBACK, fetchData)
		console.log(response)
	}
}

export default new FeedbackService()
