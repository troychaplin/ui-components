import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import type { ButtonGroupProps } from './ButtonGroup';
import { Button } from '../Button/Button';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/Button Group',
  component: ButtonGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isCenter: false,
  } as ButtonGroupProps,
  render: args => (
    <ButtonGroup {...args}>
      <Button label="Button One" />
      <Button label="Button Two" color="dark-orange" isOutline />
      <Button label="Button Three" color="dark-blue" isOutline />
      <Button label="Button Four" color="dark-blue" isOutline noBg />
    </ButtonGroup>
  ),
};
