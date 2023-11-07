import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'
import App from './App.vue'
import router from './router'
// import { loginDataStore } from './stores/auth/login'
import './assets/style.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faUserSecret,
  faPlus,
  faFilePen,
  faChartSimple,
  faCalendarDays,
  fas
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fab, fas, faUserSecret, faPlus, faChartSimple, faCalendarDays, faFilePen)
/* control locale language */
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  availableLocales: ['en', 'ar'],
  messages: messages
})

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(VueSweetalert2)
app.use(i18n)

// auto login start before router //
// const loginStore = loginDataStore()
// loginStore.tryLogin()

app.use(router)
app.mount('#app')
