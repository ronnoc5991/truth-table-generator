import type { Meta } from '@storybook/react';

import { createTemplate } from '../../../storybook-helpers/stories';
import { globalStoreDecorator } from '../../../storybook-helpers/decorators';
import O1Form from './O1Form';

export default {
  title: 'O1Form',
  component: O1Form,
  decorators: [globalStoreDecorator],
} as Meta;

// eslint-disable-next-line @typescript-eslint/naming-convention
const Template = createTemplate(O1Form);

export const Default = Template.bind({});
Default.args = {};
