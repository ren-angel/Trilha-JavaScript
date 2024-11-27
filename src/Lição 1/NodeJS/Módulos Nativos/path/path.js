// O módulo 'path' ajuda a trabalhar com caminhos de arquivos e diretórios, tornando o código multiplataforma (compatível entre Windows, Linux e macOS)

// Concatenar caminhos de forma segura
const path = require('path');

const fullPath = path.join(__dirname, 'path', 'arquivo.txt');
console.log('Caminho completo:', fullPath);

// Obter o nome do arquivo
const fileName = path.basename('C:/Users/CT Desenvolvimento/Desktop/Trilha-JavaScript/src/Lição 1/NodeJS/Módulos Nativos/path/arquivo.txt');
console.log('Nome do arquivo:', fileName);

// Obter a extensão do arquivo
const ext = path.extname('C:/Users/CT Desenvolvimento/Desktop/Trilha-JavaScript/src/Lição 1/NodeJS/Módulos Nativos/path/arquivo.txt');
console.log('Extensão:', ext);
