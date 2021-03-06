class Tabelas{
    init(conexao){
        this.conexao = conexao
        this.criarTabelaAtendimetos()
        this.criarPets()
    }

    criarTabelaAtendimetos(){
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(11) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if (erro){
                console.log(erro)
            }else{
                console.log('Tabela de atendimentos criada!')
            }
        })
    }

    criarPets(){
        const query = 'CREATE TABLE IF NOT EXISTS Pets (id int NOT NULL AUTO_INCREMENT, nome varchar(50), image varchar(200), PRIMARY KEY (id))'

        this.conexao.query(query, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela pets criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas