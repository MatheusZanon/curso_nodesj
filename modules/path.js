const path = require ("path");

// Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// O nome do diretorio atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Criar o objeto Path
console.log(path.parse(__filename));

// Juntar vários caminhos de arquivos
console.log(path.join(__dirname, "teste", "teste.html"));