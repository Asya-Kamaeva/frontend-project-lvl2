import _ from 'lodash';

const compareData = (obj1, obj2) => {
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
export default compareData;

