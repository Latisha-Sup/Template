import request from 'supertest'

import app from '../../../app'

const port = 5005
const host = `http://localhost:${port}`
const version = '0.1'

beforeAll(async () => {
  await app.listen(port)
})

describe('GET /', () => {
  it('Should response current version 0.1', async () => {
    const res = await request(host).get(`/v${version}`)
    expect(res.type).toEqual('application/json')
    expect(res.status).toEqual(200)
    expect(res.body).toEqual({
      version: version,
    })
  })
})

afterAll((done) => {
  app.close()
  done()
})
