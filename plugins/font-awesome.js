import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCannabis, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCannabis, faHeart)
library.add(faGithub, faLinkedin, faTwitter)

Vue.component('font-awesome-icon', FontAwesomeIcon)
