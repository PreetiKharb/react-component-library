import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button  from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /* argTypes: {
    backgroundColor: { control: 'color' },
  }, */
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ClickMe = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ClickMe.args = {
  class: "btn btn-secondary",
  label: 'Click me!',
  onClick: ()=> console.log('click me clicked')
};

export const HelloButton = Template.bind({});
HelloButton.args = {
  class: "btn btn-primary",
  label: 'Hello World',
  onClick: ()=> console.log('Hello world clicked')
};

