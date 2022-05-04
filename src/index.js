import fs from 'fs';
import path from 'path';
import compareData from './compareData.js';
import chooseParser from './parsers.js';
import format from './formats/format.js';

const getPath = (file) => path.resolve(process.cwd(), file);
const readFile = (file) => fs.readFileSync(getPath(file), 'utf-8');

const genDiff = (file1, file2, nameOfFormat = 'stylish') => {
  const content1 = readFile(file1);
  const content2 = readFile(file2);
  const obj1 = chooseParser(content1, file1.split('.')[1]);
  const obj2 = chooseParser(content2, file2.split('.')[1]);
  const tree = compareData(obj1, obj2);
  return format(tree, nameOfFormat);
};
export default genDiff;
