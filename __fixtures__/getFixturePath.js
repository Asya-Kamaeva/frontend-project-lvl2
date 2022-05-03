import path from 'path';
import fs from 'fs';

const getFixturePath = (file) => fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', file), 'utf-8');

export default getFixturePath;
