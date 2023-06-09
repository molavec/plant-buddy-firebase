import type { Meta, StoryObj } from '@storybook/react';

import ChangePassword  from '../../components/ChangePassword';

// More on how to set up stories at: 
// https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ChangePassword> = {
  title: 'Commons/ChangePassword',
  component: ChangePassword,
  tags: ['plant-buddy-component'],
};

export default meta;
type Story = StoryObj<typeof ChangePassword>

// More on writing stories with args: 
// https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    currentpw: '',
    newpw: '',
    renewpw: '',
  },
};