#!/usr/bin/env node
import { Command } from 'commander';
import getFixturePath from '../src/getFixturePath.js';
import genDiff from '../src/index.js';

const program = new Command();

program
  .version('0.0.1', '-V, --version', 'output the version number')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .action(() => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');
    console.log(genDiff(filepath1, filepath2));
  });

program.parse();
