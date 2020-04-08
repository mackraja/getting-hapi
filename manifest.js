/**
 * @author: Monty Khanna
 */
import Inert from 'inert';
import Vision from 'vision';
import HapiSwagger from 'hapi-swagger';
import HapiRouter from 'hapi-router';
import HapiAuthorization from 'hapi-authorization';
import Good from 'good';
import * as Path from 'path';
import { jwtAuth } from './helpers'; // eslint-disable-line

import * as rootPackage from './package.json';

const hapiSwaggerOptions = {
  pathPrefixSize: 1,
  grouping: 'tags',
  sortTags: 'name',
  expanded: 'none',
  info: {
    title: `${rootPackage.name} Documentation`,
    version: rootPackage.version,
    contact: {
      name: 'Monty Khanna',
      email: 'montykhanna007@hotmail.com',
    },
  },
  securityDefinitions: {
    jwt: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header'
    }
  },
  schemes: (process.env.NODE_ENV || 'development') !== 'development' ? ['https'] : ['http'],
};

const visionOptions = {
  engines: {
    html: require('handlebars')
  },
  relativeTo: __dirname,
  path: 'public',
};

const goodOptions = {
  ops: {
    interval: 1000,
  },
  reporters: {
    myConsoleReporter: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ log: '*', error: '*', response: '*' }],
    }, {
      module: 'good-console',
    }, 'stdout'],
    // myFileReporter: [{
    //     module: 'good-squeeze',
    //     name: 'Squeeze',
    //     args: [{ ops: '*' }]
    // }, {
    //     module: 'good-squeeze',
    //     name: 'SafeJson'
    // }, {
    //     module: 'good-file',
    //     args: ['./test/fixtures/awesome_log']
    // }],
    // myHTTPReporter: [{
    //     module: 'good-squeeze',
    //     name: 'Squeeze',
    //     args: [{ error: '*' }]
    // }, {
    //     module: 'good-http',
    //     args: ['http://prod.logs:3000', {
    //         wreck: {
    //             headers: { 'x-api-key': 12345 }
    //         }
    //     }]
    // }]
  },
};

const connections = {
  routes: {
    files: {
      relativeTo: Path.join(__dirname, './', 'public'),
    },
  },
};

const registrations = [
  Inert,
  {
    plugin: Vision,
    options: visionOptions,
  },
  {
    plugin: HapiSwagger,
    options: hapiSwaggerOptions,
  },
  {
    plugin: jwtAuth,
  },
  {
    plugin: HapiRouter,
    options: {
      cwd: __dirname,
      routes: 'controllers/**/*Controller.js',
    },
  },
  {
    plugin: Good,
    options: goodOptions,
  },
  {
    plugin: HapiAuthorization,
    options: {
      roles: false, // default roles: "SUPER_ADMIN", "ADMIN", "USER", "GUEST"
    },
  },
];

module.exports = { connections, registrations };
