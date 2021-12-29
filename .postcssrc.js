// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    plugins: [
        // для редактирования целевых браузеров: используйте поле "browserlist" в файле package.json
        require('autoprefixer')
    ]
}