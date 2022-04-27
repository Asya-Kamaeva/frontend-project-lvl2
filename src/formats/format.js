import stylish from './stylish.js';
import plain from './plain.js';

const format = (tree, nameOfFormat) => {
  if (nameOfFormat === 'stylish') {
    return stylish(tree);
  }
  if (nameOfFormat === 'plain') {
    return plain(tree);
  }
  return tree;
};
export default format;
