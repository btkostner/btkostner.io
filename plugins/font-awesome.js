import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCannabis, faHeart, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSteam, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLightbulbOn } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCannabis, faHeart, faLightbulb)
library.add(faGithub, faLinkedin, faSteam, faTwitter)
library.add(faLightbulbOn)

Vue.component('font-awesome-icon', FontAwesomeIcon)
