import fs from 'fs';
import compareData from './compareData.js';

const genDiff = (file1, file2) => {
  const obj1 = JSON.parse(fs.readFileSync(file1, 'utf-8'));
  const obj2 = JSON.parse(fs.readFileSync(file2, 'utf-8'));
  return compareData(obj1, obj2);
};
export default genDiff;
