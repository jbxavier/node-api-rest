const conexao = require('../infraestrutura/conexao')
const uploadDeArquivo = require('../arquivos/uploadDeArquivos')

class Pet {
    adiciona(pet, res) {
        const query = 'INSERT INTO Pets  SET ?'

        uploadDeArquivo(pet.image, pet.nome, (erro, novoCaminho) => {
            if (erro) {
                res.status(400).json({ erro })
            } else {
                const novoPet = { nome: pet.nome, image: novoCaminho }
                conexao.query(query, novoPet, erro => {
                    if (erro) {
                        console.log('erro médoto adiciona(pet) - models/pets')
                        res.status(400).json(erro)
                    } else {
                        res.status(200).json(novoPet)
                    }
                })
            }
        })

    }

    lista(res){
        const sql = 'SELECT * FROM Pets'

        conexao.query(sql, (erro, resultados) => {
            if (erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }
}

module.exports = new Pet()