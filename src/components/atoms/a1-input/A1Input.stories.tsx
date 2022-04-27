import type { Meta } from '@storybook/react';

import { createTemplate } from '../../../storybook-helpers/stories';
import { globalStoreDecorator } from '../../../storybook-helpers/decorators';
import A1Input from './A1Input';

export default {
  title: 'A1Input',
  component: A1Input,
  decorators: [globalStoreDecorator],
} as Meta;

// eslint-disable-next-line @typescript-eslint/naming-convention
const Template = createTemplate(A1Input);

export const Default = Template.bind({});
Default.args = {};
