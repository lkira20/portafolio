 
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faImages} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faImages);
 
Vue.component('font-awesome-icon', FontAwesomeIcon)