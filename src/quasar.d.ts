// Заставляет TS применять дополнения `@quasar/app` пакета "quasar"
// Удаление этого приведет к нарушению импорта "квазаров / оболочек", поскольку эти типы
// объявлены в `@quasar/app`
// В качестве побочного эффекта, поскольку "@quasar/app" ссылается на "quasar", чтобы дополнить его,
// в этом объявлении также применяются собственные дополнения "quasar"
// (например, добавляет "$q` в контекст компонента Vue)
/// <reference types="@quasar/app" />
