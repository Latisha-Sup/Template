import request from 'supertest'

import app from '../../../app'

const version = '0.1'

describe('GET /', () => {
  it('Should response current version 0.1', async () => {
    const res = await request(app).get(`/v${version}`)
    expect(res.type).toEqual('application/json')
    expect(res.status).toEqual(200)
    expect(res.body).toEqual({
      version: version,
    })
  })
})

afterAll((done) => {
  done()
})
