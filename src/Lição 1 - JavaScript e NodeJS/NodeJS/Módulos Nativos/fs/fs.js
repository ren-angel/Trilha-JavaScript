// O módulo 'fs' (file system) permite que o código interajá com o sistema de arquivos. Com ele, você pode ler, escrever, excluir arquivos e manipular diretórios

// Leitura de arquivos
const fs = require('fs');

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    console.log('Conteúdo do arquivo:', data);
});

// OBS: 'readFile()' é assíncrono. Para leituras síncronas, use 'readFileSync()'

// Escrita em arquivos
fs.writeFile('novoArquivo.txt', 'Hello World!', (err) => {
    if (err) {
      console.error('Erro ao escrever o arquivo:', err);
      return;
    }

    console.log('Arquivo salvo com sucesso!');
});