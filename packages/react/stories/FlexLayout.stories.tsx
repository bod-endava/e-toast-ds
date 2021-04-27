import React from 'react';
import { Story, Meta } from '@storybook/react';
import FlexLayout, { FlexLayout } from '../src/FlexLayout';

import {
    noControl,
    textControl
} from './shared/utils'

export default {
    title: '@e-toast/FlexLayout',
    component: FlexLayout,
    argsTypes: {
        children: noControl(),
        flexDirection: textControl(),
        justifyContent: textControl(),
        flexWrap: textControl(),
        alignItems: textControl(),
        flexGrow: textControl,
        flexShrink: textControl(),
        flexBasis: textControl(),
        flex: textControl(),
    }
} as Meta

const Template: Story<FlexLayoutProps> = (args) => <FlexLayout {...args} />

export const Sample = Template.bind({});

Sample.args ={
    children: '<div>',
    justifyContent: 'space-between',
}
