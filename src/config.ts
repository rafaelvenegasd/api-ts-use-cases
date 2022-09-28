import convict from 'convict'
import dotenv from 'dotenv'

dotenv.config()

const config = convict({
	env: {
		format: ['development', 'test'],
		default: 'development',
		env: 'NODE_ENV'
	},
	port: {
		format: 'port',
		default: 3002,
		env: 'PORT',
		arg: 'port'
	}
})

config.validate({ allowed: 'strict' })

export { config }

export const configProps = config.getProperties()
