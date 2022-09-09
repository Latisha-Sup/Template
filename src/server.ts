import dotenv from 'dotenv'
dotenv.config()

import app from './app'

const server = async () => {
  try {
    const port = process.env.PORT ? Number(process.env.PORT) : 5000
    await app.listen(port)

    console.log(`hyper-express app listening at http://localhost:${port}`)
  } catch (error) {
    console.log(error)
  }
}

server()
