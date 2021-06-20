const request = require("supertest")
const app = require('../server')
const truncate = require('./truncate')
const connection = require('../DataBase')
describe('Sample Test', () => {
  afterAll(() =>{
    connection.close()
  })
  beforeEach(async () =>{
   await truncate(connection.models)
  })
  it('Test Validate CellPhone', async () => {
    const ClientController = require('../Controllers/ClientController')
    expect(await ClientController.validateTelephoneCell("123")).toBe(null)

  })

  it('Test Session', async () => {
    const res = await request(app).post('/sessions').send({
      "login":"QUALQUERCOSIAAAAAAAAAAAA",
      "password":"123"
    })
    expect(res.statusCode).toEqual(401)

  })

  it('Test Create User expect 201 code', async () => {

    const res = await request(app).post('/users').send({
      "login":"newUser",
      "name":"newUser",
      "password":"123",
      "isAdmin":true
    })
    expect(res.statusCode).toEqual(201)
  })


  it('Test Create User that already exists ', async () => {

    let res = await request(app).post('/users').send({
      "login":"newUser",
      "name":"newUser",
      "password":"123",
      "isAdmin":true
    })

    res = await request(app).post('/users').send({
      "login":"newUser",
      "name":"newUser",
      "password":"123",
      "isAdmin":true
    })
    expect(res.statusCode).toEqual(401)
    expect(res.body).toHaveProperty('error')
    expect(res.body.error).toBe('Login already used')
  })

  it('Test Delete a Client that not exist', async () => {

    const res = await request(app).delete(`/client/${1}`)
    expect(res.statusCode).toEqual(404)
    expect(res.body).toHaveProperty('error')
    expect(res.body.error).toBe('Client does not exist')


  })


})
