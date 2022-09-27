import { getPersonUseCase } from './getPersonUseCase'
describe('getPersonUseCase', () => {
	it('get the message "Persona obtenida exitosamente"', async () => {
		const result = await getPersonUseCase()
		expect(result).toEqual({
			message: 'Persona obtenida exitosamente'
		})
	})
})
