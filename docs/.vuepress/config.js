const path = require('path')
const { defaultTheme } = require('@vuepress/theme-default');

const localPlugin = require(path.join(__dirname, '../../src/index.js'))

module.exports = {
  title: 'vuepress-plugin-mermaidjs2',
  description: 'Easy Diagramming for VuePress with mermaidjs',
  plugins: [localPlugin()],
  theme: defaultTheme({
    search: false,
    repo: 'eFrane/vuepress-plugin-mermaidjs',
  }),
}
