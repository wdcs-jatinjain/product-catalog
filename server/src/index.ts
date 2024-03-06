import dotenv from 'dotenv'
dotenv.config()

import { SERVER_PORT } from './config'
import { Server } from './server'

const server = new Server(SERVER_PORT)
server.start()

