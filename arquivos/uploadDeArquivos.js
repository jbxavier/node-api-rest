const fs = require('fs')
const path = require('path')

// pipe: transforma a stream de leitura em stream de escrita
// on: evento disparado quando terminar/finish
module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {
    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho)
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1

    if (tipoEhValido) {
        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`
        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callbackImagemCriada(false, novoCaminho))
    } else {
        const erro = 'Tipo é inválido'
        console.log('Erro! Tipo inválido')
        callbackImagemCriada(erro)
    }
}

/*
fs.readFile('./assets/salsicha.jpg', (erro, buffer) => {
    console.log('imagem bufferizada')
    
    fs.writeFile('./assets/salsicha.jpg', buffer, (erro) => {
    console.log('imagem foi escrita')
    })
})
*/