import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const format = (tree, nameOfFormat) => {
  switch (nameOfFormat) {
    case 'stylish':
      return stylish(tree);
    case 'plain':
      return plain(tree);
    case 'json':
      return json(tree);
    default:
      return 'Error';
  }
};
export default format;
