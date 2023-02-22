import express from 'express'
import routesStudents from './routes/student.routes.js'
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()

app.use(express.json())
app.use(routesStudents)
app.use(express.static(join(__dirname,'../client/build')))

export default app