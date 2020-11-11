#!/usr/bin/env node
const yargs = require('yargs/yargs');
const fs = require('fs');

const { hideBin } = yargs;

const classTemplate = `
import React form 'react';

export default class {name} extends React.Component {
    constructor() {

    }

    render() {
        return (
            <>
            </>
        );
      }
}
`;

const funcTemplate = `
export default function {name}(props) {

    return(
        <>
        </>
    );
}
`;

const { argv } = yargs(hideBin(process.argv))
  .command(
    'create [path]',
    'creating component',
    (yArgs) => {
      yArgs.positional('path');
    },
    (argv) => {
      const template = argv.class ? classTemplate : funcTemplate;

      if (!argv.path) {
        process.stdout('Error. Path is empty.');
      }
      const name = argv.path.match(/[^/]+$/);
      console.info(name);
      template.replace('{name}', name);
      fs.writeFileSync(argv.path, template.replace('{name}', name), (err) => process.stdout(err));
    },
  )
  .option(
    'class', {
      alias: 'c',
      type: 'boolean',
      default: false,
      description: 'create class component',
    },
  )
  .option(
    'style', {
      alias: 's',
      type: 'boolean',
      default: false,
      description: 'create component with style',
    },
  );
