import { Router } from 'express'
import { createPersonUseCase } from '../useCases'
import { deletePersonUseCase } from '../useCases/person/deletePerson/deletePersonUseCase'
import { getPersonUseCase } from '../useCases/person/getPerson/getPersonUseCase'
import { updatePersonUseCase } from '../useCases/person/updatePerson/updatePersonUseCase'

const useCaseRouter = Router()

useCaseRouter.get('/person', getPersonUseCase)
useCaseRouter.post('/person', createPersonUseCase)
useCaseRouter.put('/person', updatePersonUseCase)
useCaseRouter.delete('/person', deletePersonUseCase)

export { useCaseRouter }
