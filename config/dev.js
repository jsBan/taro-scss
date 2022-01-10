/* eslint-disable import/no-commonjs */
module.exports = {
  env: {
    // NODE_ENV: '"development"'
    NODE_ENV: '"production"'

  },
  defineConstants: {
  },
  mini: {},
  h5: {},
  weapp: {
    module: {
      autoprefixer:{
        enable: true,
      },
      url: {
        enable: true,
        config: {
          limit: 10240
        }
      }
    }
  }
}
