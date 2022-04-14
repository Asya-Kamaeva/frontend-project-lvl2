import genDiff from '../src/index.js';
import getFixturePath from '../src/getFixturePath.js';

const absolutePath1 = getFixturePath('file1.json');
const absolutePath2 = getFixturePath('file2.json');
const relativePath1 = '__fixtures__/file1.json';
const relativePath2 = '__fixtures__/file2.json';
const resultAbsolutePath = genDiff(absolutePath1, absolutePath2);
const resultRelativePath = genDiff(relativePath1, relativePath2);
const result = [
  '-  follow: false',
  '   host: hexlet.io',
  '-  proxy: 123.234.53.22',
  '-  timeout: 50',
  '+  timeout: 20',
  '+  verbose: true'
];
const fullResult = result.join('\n');

test('result is string', () => {
  expect(typeof(resultAbsolutePath)).toEqual('string');
});

test('result with absolute path is correct', () => {
  expect(resultAbsolutePath).toEqual(fullResult);
});

test('result with relative path is correct', () => {
  expect(resultRelativePath).toEqual(fullResult);
});
