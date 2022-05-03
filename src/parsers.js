import yaml from 'js-yaml';

const chooseParser = (data, extension) => {
  switch (extension) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
      return yaml.load(data);
    case 'yaml':
      return yaml.load(data);
    default:
      'Error';
  }
};
export default chooseParser;
