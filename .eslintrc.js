module.exports = {
    // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
    // Этот параметр прерывает иерархию конфигурации в этом файле
    // Удалите это, если у вас есть файл конфигурации ESLint более высокого уровня
    // (обычно это происходит в репозиториях mono)
    root: true,

    parserOptions: {
        parser: '@babel/eslint-parser',
        ecmaVersion: 2018, // Позволяет парсить современные функции ECMAScript
        sourceType: 'module' // Позволяет использовать импорты
    },

    env: {
        browser: true
    },

    // Порядок правил важен, избегайте их перестановки
    extends: [
        // Базовые рекомендуемые правила ESLint
        // 'eslint:recommended',


        // Раскомментируйте любую из приведенных ниже строк, чтобы выбрать желаемую строгость,
        // но оставьте только один без комментариев!
        // Подробнее https://eslint.vuejs.org/rules/#available-rules
        'plugin:vue/vue3-essential', // Приоритет A: Essential (Предотвращение ошибок)
        // 'plugin:vue/vue3-strongly-recommended', // Приоритет B: Настоятельно Рекомендуется (Улучшение Читабельности)
        // 'plugin:vue/vue3-recommended', // Приоритет C: Рекомендуется (Минимизация произвольного выбора и когнитивных издержек)

        // https://github.com/prettier/eslint-config-prettier#installation
        // использование с Prettier, предоставленное "eslint-config-prettier"
        'prettier'
    ],

    plugins: [
        // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
        // требуется для удаления файлов *.vue
        'vue',

        // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
        // Prettier не был включен в качестве плагина, чтобы избежать влияния на производительность
        // добавьте его в качестве дополнения к вашей IDE
    ],

    globals: {
        ga: 'readonly', // Google Аналитика
        cordova: 'readonly',
        __statics: 'readonly',
        __QUASAR_SSR__: 'readonly',
        __QUASAR_SSR_SERVER__: 'readonly',
        __QUASAR_SSR_CLIENT__: 'readonly',
        __QUASAR_SSR_PWA__: 'readonly',
        process: 'readonly',
        Capacitor: 'readonly',
        chrome: 'readonly'
    },

    // добавьте свои собственные правила здесь
    rules: {
        'prefer-promise-reject-errors': 'off',


        // разрешить отладчик только во время разработки
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}