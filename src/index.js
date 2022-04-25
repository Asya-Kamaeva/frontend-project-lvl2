import path from 'path';
import compareData from './compareData.js';
import getFixturePath from './getFixturePath.js';
import chooseParser from './parsers.js';
import format from './formats/format.js';

const genDiff = (file1, file2, nameOfFormat = 'stylish') => {
  const parser1 = chooseParser(path.extname(file1));
  const parser2 = chooseParser(path.extname(file2));
  const obj1 = parser1(getFixturePath(file1));
  const obj2 = parser2(getFixturePath(file2));
  const tree = compareData(obj1, obj2);
  return format(tree, nameOfFormat);
};
export default genDiff;
