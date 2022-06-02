import { ComponentStory, ComponentMeta } from '@storybook/react';

import Notification from './notification';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UiKit/Notification',
  component: Notification,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Notification>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Notification> = (args) => <Notification {...args} />;

export const Info = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Info.args = {
  type: 'info',
  message: 'New data is available.',
  // message: 'Text of a notification',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: 'Your password has been correctly updated.',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  message: 'Your account will expire in 10 days.'
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  message: 'You don\'t have enough permissions to update these settings.'
};
