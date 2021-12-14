// O index.js tem somente a responsabilidade de subir o servidor!!!

const customExpress = require('./config/customExpress.js')

const app = customExpress()

app.listen(3000, () => console.log('Servidor redando na porta 3000'))



