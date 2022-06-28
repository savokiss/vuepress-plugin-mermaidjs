const path = require('path')
const localPlugin = require(path.join(__dirname, '../../src/index.js'));

module.exports = {
    title: 'vuepress-plugin-mermaidjs',
    description: 'Easy Diagramming for VuePress with mermaidjs',
    plugins: [
        localPlugin,
    ],
    themeConfig: {
        search: false,
        repo: 'eFrane/vuepress-plugin-mermaidjs'
    }
}
