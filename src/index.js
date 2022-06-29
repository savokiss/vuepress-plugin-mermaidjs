const { path } = require('@vuepress/utils')

module.exports = (options, ctx) => {
  return {
    name: 'vuepress-plugin-mermaidjs2',
    define: {
      MERMAID_OPTIONS: options || {},
    },
    extendsMarkdown (md) {
      md.use(require('./markdownItPlugin'))
    },
    clientConfigFile: path.resolve(__dirname, 'clientAppEnhance.js')
  }
}
