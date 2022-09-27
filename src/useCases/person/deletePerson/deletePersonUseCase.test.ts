import { deletePersonUseCase } from './deletePersonUseCase'
describe('deletePersonUseCase', () => {
	it('get the message "Persona borrada exitosamente"', async () => {
		const result = await deletePersonUseCase()
		expect(result).toEqual({
			message: 'Persona borrada exitosamente'
		})
	})
})
