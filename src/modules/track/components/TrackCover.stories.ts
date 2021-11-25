import TrackCover from './TrackCover.vue'
import { Story } from '@storybook/vue3'
import '@/assets/styles/index.scss'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'
import { TrackOfTrackCover } from '@/modules/track/models/TrackCover'

export default {
  title: 'Player/TrackCover',
  component: TrackCover,
} as Meta

const Template: Story = (args) => ({
  components: { TrackCover },
  setup() {
    return { args }
  },
  template: '<TrackCover v-bind="args" />',
})

const track: TrackOfTrackCover = {
  cover: 'https://picsum.photos/50',
  title: 'G.O.A.T.',
  bands: ['Polyphia'],
}
export const Default = Template.bind({})
Default.args = { track }

export const WithSizeOf6 = Template.bind({})
WithSizeOf6.args = {
  track,
  size: 6,
}
