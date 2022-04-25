import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';
import getFixturePath from '../src/getFixturePath.js';

const result = getFixturePath('stylishResult.txt');

test('result is string', () => {
  expect(typeof genDiff('file1.json', 'file2.json')).toEqual('string');
});
test('result with json file is correct', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(result);
});
test('result with yml file is correct', () => {
  expect(genDiff('file1.yaml', 'file2.yml')).toEqual(result);
});
test('diferent extensions', () => {
  expect(genDiff('file1.yaml', 'file2.json')).toEqual(result);
});
