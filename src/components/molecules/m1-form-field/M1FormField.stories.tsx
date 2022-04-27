import type { Meta } from '@storybook/react';

import { createTemplate } from '../../../storybook-helpers/stories';
import { globalStoreDecorator } from '../../../storybook-helpers/decorators';
import M1FormField from './M1FormField';

export default {
  title: 'M1FormField',
  component: M1FormField,
  decorators: [globalStoreDecorator],
} as Meta;

// eslint-disable-next-line @typescript-eslint/naming-convention
const Template = createTemplate(M1FormField);

export const Default = Template.bind({});
Default.args = {};
