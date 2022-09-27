import { createPersonUseCase } from './createPersonUseCase'
describe('createPersonUseCase', () => {
	it('get the message "Persona creada exitosamente"', async () => {
		const result = await createPersonUseCase()
		expect(result).toEqual({
			message: 'Persona creada exitosamente'
		})
	})
})
