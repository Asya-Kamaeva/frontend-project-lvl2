import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (nameOfFile) => path.join(__dirname, '..', '__fixtures__', nameOfFile);

export default getFixturePath;