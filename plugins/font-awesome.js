import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faSteam, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCannabis, faHeart, faLightbulb, faLightbulbOn } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faLinkedin, faSteam, faTwitter)
library.add(faCannabis, faHeart, faLightbulb, faLightbulbOn)

Vue.component('font-awesome-icon', FontAwesomeIcon)
