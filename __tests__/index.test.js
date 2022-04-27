import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';
import getFixturePath from '../src/getFixturePath.js';

const stylishResult = getFixturePath('stylishResult.txt');
const plainResult = getFixturePath('plainResult.txt');

test('result is string', () => {
  expect(typeof genDiff('file1.json', 'file2.json', 'stylish')).toEqual('string');
});
test('stylish json-json', () => {
  expect(genDiff('file1.json', 'file2.json', 'stylish')).toEqual(stylishResult);
});
test('stylish yaml-yml', () => {
  expect(genDiff('file1.yaml', 'file2.yml')).toEqual(stylishResult);
});
test('stylish yaml-json', () => {
  expect(genDiff('file1.yaml', 'file2.json')).toEqual(stylishResult);
});

test('plain json-json', () => {
  expect(genDiff('file1.json', 'file2.json', 'plain')).toEqual(plainResult);
});
test('plain yaml-yml', () => {
  expect(genDiff('file1.yaml', 'file2.yml', 'plain')).toEqual(plainResult);
});
test('plain yaml-json', () => {
  expect(genDiff('file1.yaml', 'file2.json', 'plain')).toEqual(plainResult);
});
