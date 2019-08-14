import { storiesOf } from '@storybook/vue'
import Logo from '../components/Logo.vue'
import VuetifyLogo from '../components/VuetifyLogo.vue'

storiesOf('Logo', module).add('to Storybook', () => ({
  components: { Logo },
  template: '<logo />'
}))

storiesOf('VuetifyLogo', module).add('to Storybook', () => ({
  components: { VuetifyLogo },
  template: '<vuetify-logo />'
}))
