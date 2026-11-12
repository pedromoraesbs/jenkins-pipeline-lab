
const test = require('node:test');
const assert = require('node:assert/strict');

const { somar, subtrair } = require('../src/calculadora');

test('Deve somar dois numeros corretamente', () => {
    const resultado = somar(20, 15);

    assert.equal(resultado, 35);
});

test('Deve subtrair dois numeros corretamente', () => {
    const resultado = subtrair(30, 12);

    assert.equal(resultado, 18);
});
