import { boot } from 'quasar/wrappers'
import axios from 'axios'

// Будьте осторожны при использовании SSR для перекрестного запроса состояния загрязнения
// из-за создания одноэлементного экземпляра здесь;
// Если какой-либо клиент изменит этот (глобальный) экземпляр, это может быть
// хорошей идеей переместить создание этого экземпляра внутрь
// функции "export default () => {}" ниже (которая выполняется индивидуально
// для каждого клиента)
const api = axios.create({ baseURL: 'https://api.example.com' })

export default boot(({ app }) => {
    // for use inside Vue files (Options API) through this.$axios and this.$api

    app.config.globalProperties.$axios = axios
        // ^ ^ ^ Позволяет использовать this.$axios (для формы API параметров Vue)
        //       таким образом, не обязательно импортировать axios в каждый файл vue

    app.config.globalProperties.$api = api
        // ^ ^ ^ Позволяет использовать this.$api (для формы API параметров Vue)
        //       для легкого выполнения запросов к API приложения
})

export { api }