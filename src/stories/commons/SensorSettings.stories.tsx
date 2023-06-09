import type { Meta, StoryObj } from '@storybook/react'

import SensorSettings  from '../../components/SensorSettings'

// More on how to set up stories at: 
// https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SensorSettings> = {
  title: 'Commons/SensorSettings',
  component: SensorSettings,
  tags: ['plant-buddy-component'],
}

export default meta
type Story = StoryObj<typeof SensorSettings>

// More on writing stories with args: 
// https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    deviceName: 'Thermohygrometer Module',
    deviceToken: '6rtu0b1yftxdo0ra58qp',
  },
}