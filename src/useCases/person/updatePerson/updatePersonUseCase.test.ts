import { updatePersonUseCase } from './updatePersonUseCase'
describe('updatePersonUseCase', () => {
	it('get the message "Persona actualizada exitosamente"', async () => {
		const result = await updatePersonUseCase()
		expect(result).toEqual({
			message: 'Persona actualizada exitosamente'
		})
	})
})
