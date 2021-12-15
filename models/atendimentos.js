const conexao = require('../infraestrutura/conexao')
const moment = require('moment')

class Atendimento{
    adiciona(atendimento, res){
        // o moment() já busca a data atual aqui no caso já formatada
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        // passamos o formato que estamos enviando e o qual devemos salvar
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        const atendimentoComData = {...atendimento, dataCriacao, data}
        // ? vai receber o que deve ser inserido na tabela
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimentoComData, (erro, resultados) => {
            if (erro){
                res.status(400).jason(erro)
            }else{
                res.status(201).jason(resultados)
            }
        })
    }
}

module.exports = new Atendimento