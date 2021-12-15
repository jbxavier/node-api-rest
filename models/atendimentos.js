const conexao = require('../infraestrutura/conexao')

class Atendimento{
    adiciona(atendimento){
        // ? vai receber o que deve ser inserido na tabela
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimento, (erro, resultados) => {
            if (erro){
                console.log(erro)
            }else{
                console.log(resultados)
            }
        })
    }
}

module.exports = new Atendimento