/*
 * Этот файл запускается в контексте Node (он не транспилируется Babel), поэтому
 * используйте только функции ES6, поддерживаемые вашей версией Node https://node.green/
 */

// Конфигурация приложения
// https://quasar.dev/quasar-cli/quasar-conf-js

/* eslint-env node */
const ESLintPlugin = require('eslint-webpack-plugin')
const { configure } = require('quasar/wrappers');

module.exports = configure(function(ctx) {
    return {
        // https://quasar.dev/quasar-cli/supporting-ts
        supportTS: false,

        // https://quasar.dev/quasar-cli/prefetch-feature
        // preFetch: true,

        // загрузочный файл приложения (/src/boot)
        // --> загрузочные файлы являются частью "main.js"
        // https://quasar.dev/quasar-cli/boot-files
        boot: [
            'axios',
        ],

        // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
        css: [
            'app.scss'
        ],

        // https://github.com/quasarframework/quasar/tree/dev/extras
        extras: [
            // 'ionicons-v4',
            // 'mdi-v5',
            // 'fontawesome-v5',
            // 'eva-icons',
            // 'themify',
            // 'line-awesome',
            // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

            'roboto-font', // необязательно, вы не привязаны к нему
            'material-icons', // необязательно, вы не привязаны к нему
        ],

        // Полный список опций: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
        build: {
            vueRouterMode: 'history', // Режим роутера. Допустимые значения: 'hash' и 'history'

            // transpile: false,
            // publicPath: '/',


            // Добавьте зависимости для переноса с помощью Babel (массив строк /регулярных выражений)
            // (из node_modules, которые по умолчанию не транспилируются).
            // Применяется только если для параметра "транспилировать" установлено значение true.
            // transpileDependencies: [],

            // rtl: true, // https://quasar.dev/options/rtl-support
            // preloadChunks: true,
            // showProgress: false,
            // gzip: true,
            // analyze: true,

            // Приведенные ниже параметры автоматически устанавливаются в зависимости от env,
            // установите их, если вы хотите переопределить
            // extractCSS: false,

            // https://quasar.dev/quasar-cli/handling-webpack
            // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain
            chainWebpack(chain) {
                chain.plugin('eslint-webpack-plugin')
                    .use(ESLintPlugin, [{ extensions: ['js', 'vue'] }])
            },
        },

        // Полный список опций: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
        devServer: {
            server: {
                type: 'http'
            },
            port: 8080,
            open: true // автоматически открывает окно браузера
        },

        // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
        framework: {
            config: {},

            // iconSet: 'material-icons', // Quasar icon set
            // lang: 'en-US', // Quasar language pack


            // Для особых случаев, за пределами которых стратегия автоматического импорта может
            // оказать влияние (например, функциональные компоненты в качестве одного из примеров),
            // вы можете вручную указать компоненты/директивы Quasar, которые будут доступны везде:
            //
            components: [],
            directives: [],

            // Quasar плагины
            plugins: []
        },

        // animations: 'all', // --- includes all animations
        // https://quasar.dev/options/animations
        animations: [],

        // https://quasar.dev/quasar-cli/developing-ssr/configuring-ssr
        ssr: {
            pwa: false,

            // manualStoreHydration: true,
            // manualPostHydrationTrigger: true,

            prodPort: 3000, // The default port that the production server should use
            // (gets superseded if process.env.PORT is specified at runtime)

            maxAge: 1000 * 60 * 60 * 24 * 30,
            // Сообщить браузеру, когда срок действия файла с сервера должен истечь из кэша (в ms)

            chainWebpackWebserver(chain) {
                chain.plugin('eslint-webpack-plugin')
                    .use(ESLintPlugin, [{ extensions: ['js'] }])
            },

            middlewares: [
                ctx.prod ? 'compression' : '',
                'render' // эта строчка должна быть последней
            ]
        },

        // https://quasar.dev/quasar-cli/developing-pwa/configuring-pwa
        pwa: {
            workboxPluginMode: 'GenerateSW', // 'GenerateSW' или 'InjectManifest'
            workboxOptions: {}, // только для GenerateSW

            // ТОЛЬКО для custom service worker (/src-pwa/custom-service-worker.[js|ts])
            // при использовании workbox в режиме InjectManifest
            chainWebpackCustomSW(chain) {
                chain.plugin('eslint-webpack-plugin')
                    .use(ESLintPlugin, [{ extensions: ['js'] }])
            },

            manifest: {
                name: `Quasar App`,
                short_name: `Quasar App`,
                description: `A Quasar Framework app`,
                display: 'standalone',
                orientation: 'portrait',
                background_color: '#ffffff',
                theme_color: '#027be3',
                icons: [{
                        src: 'icons/icon-128x128.png',
                        sizes: '128x128',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/icon-256x256.png',
                        sizes: '256x256',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/icon-384x384.png',
                        sizes: '384x384',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        },

        // Full list of options: https://quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
        cordova: {
            // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
        },

        // Full list of options: https://quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
        capacitor: {
            hideSplashscreen: true
        },

        // Full list of options: https://quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
        electron: {
            bundler: 'packager', // 'packager' or 'builder'

            packager: {
                // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

                // OS X / Mac App Store
                // appBundleId: '',
                // appCategoryType: '',
                // osxSign: '',
                // protocol: 'myapp://path',

                // Windows only
                // win32metadata: { ... }
            },

            builder: {
                // https://www.electron.build/configuration/configuration

                appId: 'quasar-template'
            },

            // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain
            chainWebpackMain(chain) {
                chain.plugin('eslint-webpack-plugin')
                    .use(ESLintPlugin, [{ extensions: ['js'] }])
            },

            // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain
            chainWebpackPreload(chain) {
                chain.plugin('eslint-webpack-plugin')
                    .use(ESLintPlugin, [{ extensions: ['js'] }])
            },
        }
    }
});