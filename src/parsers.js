import yaml from 'js-yaml';

const chooseParser = (extension) => {
  let parser;
  if (extension === '.json') {
    parser = JSON.parse;
  } else if (extension === '.yml' || extension === '.yaml') {
    parser = yaml.load;
  }
  return parser;
};
export default chooseParser;
