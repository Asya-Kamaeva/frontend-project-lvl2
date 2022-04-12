#!/usr/bin/env node
import { Command } from 'commander';
import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/index.js';

const program = new Command();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const getFixturePath = (nameOfFile) => path.join(dirname, '..', '__fixtures__', nameOfFile);

program
  .version('0.0.1', '-V, --version', 'output the version number')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .action(() => {
    const file1 = getFixturePath('file1.json');
    const file2 = getFixturePath('file2.json');
    // const file1 = '__fixtures__/file1.json';
    // const file2 = '__fixtures__/file2.json';
    console.log(genDiff(file1, file2));
  });

program.parse();
