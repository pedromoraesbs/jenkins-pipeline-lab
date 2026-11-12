
const fs = require('node:fs');
const path = require('node:path');

// Localiza o arquivo da calculadora
const origem = path.join(__dirname, '..', 'src', 'calculadora.js');

// Define a pasta de destino
const destino = path.join(__dirname, '..', 'dist');

// Cria a pasta dist, se ainda não existir
fs.mkdirSync(destino, { recursive: true });

// Copia a calculadora para a pasta dist
fs.copyFileSync(
    origem,
    path.join(destino, 'calculadora.js')
);

console.log('Build concluido com sucesso!');
console.log('Arquivo gerado: dist/calculadora.js');
