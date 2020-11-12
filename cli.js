#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies */
const yargs = require('yargs/yargs');
const fs = require('fs');
const path = require('path');

const { hideBin } = yargs;

const resolve = (filename) => path.resolve(__dirname, filename);
const createdCallback = (error, filePath) => {
  if (error) {
    console.error(error);
  }
  console.info(`Created ${filePath}`);
};

const INDEX_FILE_NAME = 'index.js';
const STYLES_FILE_NAME = 'styles.module.scss';
const COMPONENT_EXT = 'jsx';

const classTemplate = `import React from 'react';
{styles}

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

const stylesTemplate = `import styles from './${STYLES_FILE_NAME}';`;

const funcTemplate = `{styles}

export default function {name}(props) {
  return (
    <>
    </>
  );
}
`;

const indexTemplate = `import {name} from './{name}';

export default {name};
`;

// eslint-disable-next-line no-unused-vars
const { argv: ARGV } = yargs(hideBin(process.argv))
  .command(
    'create [path]',
    'creating component',
    (yArgs) => {
      yArgs
        .positional('path', {
          alias: 'p',
          type: 'string',
          description: 'path to component',
        })
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
    },
    (argv) => {
      const template = argv.class ? classTemplate : funcTemplate;
      const styleReg = argv.style ? new RegExp('{styles}') : new RegExp('{styles}\\n');
      const styleValue = argv.style ? stylesTemplate : '';

      if (!argv.path) {
        console.error('Error. Path is empty.');
      }
      const [full, folder, file] = argv.path.match(/(^.+\/)([^/]+$)/);

      if (!full || !folder || !file) {
        console.error('Invalid path');
      }
      const [name, ext = COMPONENT_EXT] = file.split('.');

      if (!name || !ext) {
        console.error('Invalid filename');
      }
      const componentData = template.replace(/{name}/g, name).replace(styleReg, styleValue);
      const indexData = indexTemplate.replace(/{name}/g, name);
      fs.access(resolve(folder), (err) => {
        if (err && err.code === 'ENOENT') {
          switch (err.code) {
            case 'ENOENT': {
              fs.mkdirSync(resolve(err.path));
              break;
            }
            default: {
              console.error(err);
              return;
            }
          }
        }
        const componentPath = resolve(`${folder}/${name}.${ext}`);
        const indexPath = resolve(`${folder}${INDEX_FILE_NAME}`);
        const stylesPath = resolve(`${folder}${STYLES_FILE_NAME}`);

        fs.writeFile(componentPath, componentData, (e) => createdCallback(e, componentPath));
        fs.writeFile(indexPath, indexData, (e) => createdCallback(e, indexPath));
        if (argv.style) {
          fs.writeFile(stylesPath, '', (e) => createdCallback(e, stylesPath));
        }
      });
    },
  ).help();
