const express = require('express')
const dotenv = require('dotenv')
import { useCaseRouter } from './routers/useCaseRouter'

dotenv.config()

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
	res.send('Here!')
})

app.use('/use-case', useCaseRouter)

app.listen(port, () => {
	console.log(`[server]: Server is running at https://localhost:${port}`)
})
