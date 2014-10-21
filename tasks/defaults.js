/*******************************
          Default Paths
*******************************/

module.exports = {
  base : '',
  paths: {
    source: {
      config      : 'src/theme.config',
      definitions : 'src/definitions/',
      site        : 'src/site/',
      themes      : 'src/themes/'
    },
    output: {
      packaged     : 'dist/',
      uncompressed : 'dist/components/',
      compressed   : 'dist/components/',
      themes       : 'dist/themes/'
    },
    clean : 'dist/',
    docs  : {
      source : '../docs/server/files/release/',
      output : '../docs/release/'
    }
  }
};