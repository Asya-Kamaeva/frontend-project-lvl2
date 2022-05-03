import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';
import getFixturePath from '../__fixtures__/getFixturePath.js';

const stylishResult = getFixturePath('stylishResult.txt');
const plainResult = getFixturePath('plainResult.txt');
const jsonResult = getFixturePath('jsonResult.txt');

const file1json = getFixturePath('file1.json');
const file2json = getFixturePath('file2.json');
const file1yaml = getFixturePath('file1.yaml');
const file2yml = getFixturePath('file2.yml');

test('result is string', () => {
  expect(typeof genDiff(file1json, file2json, 'stylish')).toEqual('string');
});
test('stylish json-json', () => {
  expect(genDiff(file1json, file2json, 'stylish')).toEqual(stylishResult);
});
test('stylish yaml-yml', () => {
  expect(genDiff(file1yaml, file2yml)).toEqual(stylishResult);
});
test('stylish yaml-json', () => {
  expect(genDiff(file1yaml, file2json)).toEqual(stylishResult);
});

test('plain json-json', () => {
  expect(genDiff(file1json, file2json, 'plain')).toEqual(plainResult);
});
test('plain yaml-yml', () => {
  expect(genDiff(file1yaml, file2yml, 'plain')).toEqual(plainResult);
});
test('plain yaml-json', () => {
  expect(genDiff(file1yaml, file2json, 'plain')).toEqual(plainResult);
});

test('json json-json', () => {
  expect(genDiff(file1json, file2json, 'json')).toEqual(jsonResult);
});
test('json yaml-yml', () => {
  expect(genDiff(file1yaml, file2yml, 'json')).toEqual(jsonResult);
});
test('json yaml-json', () => {
  expect(genDiff(file1yaml, file2json, 'json')).toEqual(jsonResult);
});


// test('result is string', () => {
//   expect(typeof genDiff('file1.json', 'file2.json', 'stylish')).toEqual('string');
// });
// test('stylish json-json', () => {
//   expect(genDiff('file1.json', 'file2.json', 'stylish')).toEqual(stylishResult);
// });
// test('stylish yaml-yml', () => {
//   expect(genDiff('file1.yaml', 'file2.yml')).toEqual(stylishResult);
// });
// test('stylish yaml-json', () => {
//   expect(genDiff('file1.yaml', 'file2.json')).toEqual(stylishResult);
// });

// test('plain json-json', () => {
//   expect(genDiff('file1.json', 'file2.json', 'plain')).toEqual(plainResult);
// });
// test('plain yaml-yml', () => {
//   expect(genDiff('file1.yaml', 'file2.yml', 'plain')).toEqual(plainResult);
// });
// test('plain yaml-json', () => {
//   expect(genDiff('file1.yaml', 'file2.json', 'plain')).toEqual(plainResult);
// });

// test('json json-json', () => {
//   expect(genDiff('file1.json', 'file2.json', 'json')).toEqual(jsonResult);
// });
// test('json yaml-yml', () => {
//   expect(genDiff('file1.yaml', 'file2.yml', 'json')).toEqual(jsonResult);
// });
// test('json yaml-json', () => {
//   expect(genDiff('file1.yaml', 'file2.json', 'json')).toEqual(jsonResult);
// });
