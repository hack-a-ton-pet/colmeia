export default interface StatusReturn<T> {
	errors: string[]
	hasError: boolean
	content: T | undefined
}
