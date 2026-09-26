const {getDefaultConfig} = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

config.resolver.alias = {
  '@config': path.join(projectRoot, 'app/config'),
  '@screens': path.join(projectRoot, 'app/screens'),
  '@components': path.join(projectRoot, 'app/components'),
  '@actions': path.join(projectRoot, 'app/actions'),
  '@reducers': path.join(projectRoot, 'app/reducers'),
  '@utils': path.join(projectRoot, 'app/utils'),
  '@assets': path.join(projectRoot, 'app/assets'),
  '@lang': path.join(projectRoot, 'app/lang'),
  '@data': path.join(projectRoot, 'app/data'),
  '@navigation': path.join(projectRoot, 'app/navigation'),
  'app': path.join(projectRoot, 'app'),
};

module.exports = config;