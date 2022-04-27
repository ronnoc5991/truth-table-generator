import type { Meta } from '@storybook/react';

import { createTemplate } from '../../../storybook-helpers/stories';
import { globalStoreDecorator } from '../../../storybook-helpers/decorators';
import A2Button from './A2Button';

export default {
  title: 'A2Button',
  component: A2Button,
  decorators: [globalStoreDecorator],
} as Meta;

// eslint-disable-next-line @typescript-eslint/naming-convention
const Template = createTemplate(A2Button);

export const Default = Template.bind({});
Default.args = {};
