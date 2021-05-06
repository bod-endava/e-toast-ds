import React from 'react';
import { Story, Meta } from '@storybook/react';
import FlexLayout, { FlexLayoutProps } from '../src/FlexLayout';
import {  AlignItems, FlexDirection, FlexWrap, JustifyContent } from './shared/FlexLayoutOptions.tsx'

import {
  noControl,
  textControl,
  radioWithOptional,
  selectControl,
} from './shared/utils'

const blockStyle: React.CSSProperties = {
  padding: '1em',
  margin: '10px',
  color: 'white',
  backgroundColor: 'tomato',
  textAlign: 'center',
  fontFamily: 'Roboto',
  fontSize: '14px',
  fontWeight: 'bold',
  height: '54px',
  width: '200px',
};

export default {
    title: '@e-toast/FlexLayout',
    component: FlexLayout,
    argsTypes: {
        children: noControl(),
        flexDirection: radioWithOptional(FlexDirection),
        justifyContent: selectControl(JustifyContent),
        flexWrap: radioWithOptional(FlexWrap),
        alignItems: selectControl(AlignItems),
        flexGrow: textControl(),
        flexShrink: textControl(),
        flexBasis: textControl(),
        flex: noControl(),
    }
} as Meta

const Template: Story<FlexLayoutProps> = (args) => <FlexLayout {...args} />

export const DefaultLayout= Template.bind({});
DefaultLayout.args ={
  children: [
    <div style={blockStyle}></div>,
    <div style={blockStyle}></div>,
    <div style={blockStyle}></div>,
  ]
}
