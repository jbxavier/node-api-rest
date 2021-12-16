
const Atendimento = require('../models/atendimentos.js')

// estamos exportando uma função que recebe o app por parâmetro.
module.exports = app => {
    // rota GET criada com express
    app.get('/atendimentos', (req, res) => res.send('você está na rota de atendimentos através do GET'))

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento, res)
        //console.log(req.body)
        
        // esse retorno ao cliente tive que remover, causou erro 
        // ERR_HTTP_HEADERS_SENT por enviar mais de uma vez o retorno ao cliente...
        //res.send('Executado POST em atendimento!')
    })
}


// assim também funcionaria sem outro módulo para ajudar a rotear...
// vou testar esse modelo posteriormente, menor dependência!

// const funcaoGET = (app) => {
//     app.get('/atendimentos', (req, res) => res.send('você está na rota de atendimentos através do GET'))
// }
// module.exports = funcaoGET
    
