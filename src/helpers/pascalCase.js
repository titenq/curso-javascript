import slug from './slug.js';

const pascalCase = string => {
  const slugString = slug(string)
  .split('-')
  .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
  .join('');

  return slugString;
};

export default pascalCase;
