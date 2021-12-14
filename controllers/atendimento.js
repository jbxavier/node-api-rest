const res = require("express/lib/response")

// estamos exportando uma função que recebe o app por parâmetro.
module.exports = app => {
    // rota GET criada com express
    app.get('/atendimento', (req, res) => res.send('você está na rota de atendimentos através do GET'))

    app.post('/atendimento', (req, res) => {
        console.log(req.body)
        res.send('você está na rota de atendimentos através do POST')
    })
}


// assim também funcionaria sem outro módulo para ajudar a rotear...
// vou testar esse modelo posteriormente, menor dependência!

// const funcaoGET = (app) => {
//     app.get('/atendimentos', (req, res) => res.send('você está na rota de atendimentos através do GET'))
// }
// module.exports = funcaoGET
    
