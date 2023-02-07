import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import KJButton from './KJButton';

export default {
  title: 'KJElements/KJButton',
  component: KJButton,
} as ComponentMeta<typeof KJButton>;

const Template: ComponentStory<typeof KJButton> = (args) => (
  <KJButton {...args} />
);

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  label: 'Hello world!',
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  label: 'The large button',
  size: 'large',
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  label: 'The small button',
  size: 'small',
};
