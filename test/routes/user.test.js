const request = require('supertest');

const app = require ('../../src/app');

test('Deve listar os usuários', () => {
    return request(app).get('/users')
    .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

test('Deve inserir usuário com sucesso', () => {
    const mail = `${Date.now()}@mail.com`;
    return request(app).post('/users')
    .send({ name: 'Walter Mitty', mail: mail, password: '123456'})
    .then((res)=> {
        expect(res.status).toBe(201);
        expect(res.body.name).toBe('Walter Mitty');
    });
});