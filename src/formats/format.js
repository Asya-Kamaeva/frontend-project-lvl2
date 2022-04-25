import stylish from './stylish.js';

const format = (tree, nameOfFormat) => {
  if (nameOfFormat === 'stylish') {
    return stylish(tree);
  }
  return tree;
};
export default format;
