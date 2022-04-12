import _ from 'lodash';
import fs from 'fs';

const compareDate = (obj1, obj2) => {
  const uniqKeys = _.uniq([...Object.keys(obj1), ...Object.keys(obj2)]).sort();
  const result = uniqKeys.reduce((sumArray, key) => {
    if (obj1[key] === obj2[key]) {
      sumArray.push(`   ${key}: ${obj1[key]}`);
    }
    if (obj1[key] !== obj2[key] && _.has(obj1, key)) {
      sumArray.push(`-  ${key}: ${obj1[key]}`);
    }
    if (obj1[key] !== obj2[key] && _.has(obj2, key)) {
      sumArray.push(`+  ${key}: ${obj2[key]}`);
    }
    return sumArray;
  }, []);
  return result.join('\n');
};
const genDiff = (file1, file2) => {
  const obj1 = JSON.parse(fs.readFileSync(file1, 'utf-8'));
  const obj2 = JSON.parse(fs.readFileSync(file2, 'utf-8'));
  return compareDate(obj1, obj2);
};
export default genDiff;
