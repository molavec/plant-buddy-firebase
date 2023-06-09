import type { Meta, StoryObj } from '@storybook/react';

import PlantSettings  from '../../components/PlantSettings';

// More on how to set up stories at: 
// https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof PlantSettings> = {
  title: 'Commons/PlantSettings',
  component: PlantSettings,
  tags: ['plant-buddy-component'],
};

export default meta;
type Story = StoryObj<typeof PlantSettings>

// More on writing stories with args: 
// https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    name: 'Auto Cookie Caramel 1',
    sciname: 'Cannabis Sativa',
    mainImage: '',
  },
};