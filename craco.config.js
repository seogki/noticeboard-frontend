const CracoAlias = require('craco-alias')
const CracoScopedCss = require('craco-plugin-scoped-css')
module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: 'tsconfig.paths.json',
        debug: false,
      },
    },
    {
      plugin: CracoScopedCss,
    },
  ],
}
