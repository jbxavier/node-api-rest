const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = () => {
    // express também é entendido como configuração, por isso veio pra cá tbm
    const app = express()
    
    // O contet-type padrão é o "urlencoded", que está relacionado aos formulários produzidos em html.
    //app.use(bodyParser.urlencoded({extended: true}))
    //app.use(bodyParser.json())

    // com a solução acima 'body-parser' também funciona, porém pode estar deprecated, aqui não disse que estava...
    // O método express.json() é nativo do express e funciona para reconhecer o objeto da requisição que está sendo recebida // (Request Object) como um objeto JSON.
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())

    // Configuração!!!
    // passando para a pasta controllers o app para que seja 
    // acessado por qualquer arquivo js dessa pasta!!!
    consign().include('controllers').into(app)

    //rotaGET(app) // assim também funciona sem o consign teria que fazer um require  do arquivo... 
    // por exemplo const rotaGET = require('./controllers/atendimento.js')

    return app
}