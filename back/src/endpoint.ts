import express from 'express'

const api = express()

//get
api.get('/usuario/login', (req, res) => {
    res.statusCode = 200
    res.send('TODO LOGIN')
    res.end
})

api.get('/servico/listar', (req, res) => {
    res.statusCode = 200
    res.send('TODO LISTAR')
    res.end
})

//put
api.put('/servico/finalizar/:id', (req, res) => {
    res.statusCode = 200
    res.send('TODO FINALIZAR SERVICO')
    res.end
})

api.put('/servico/iniciar/add', (req, res) => {
    res.statusCode = 200
    res.send('TODO ADD PEDIDO')
    res.end
})

api.put('/usuario/cadastrar/:id', (req, res) => {
    res.statusCode = 200
    res.send('TODO CADASTRAR USUARIO')
    res.end
})

export default api