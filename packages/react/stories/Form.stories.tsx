import React from 'react';
import { Story, Meta } from '@storybook/react';
import Form , { FormProps } from '../src/Form';
import { FormVariants } from './shared/FormOptions';
import {
    noControl,
    objectControl,
    selectWithOptional,
    textControl
} from './shared/utils';

export default {
    title: '@e-toast/Form',
    component: Form,
    argTypes: {
        autocompleteEnabled: selectWithOptional(FormVariants),
        firstname: textControl(),
        firstNameLabel: textControl(),
        firstNamePlaceholder: textControl(),
        lastname: textControl(),
        lastnameLabel: textControl(),
        lastnamePlaceholder: textControl(),
        email: textControl(),
        emailLabel: textControl(),
        emailPlaceholder: textControl(),
        submitLabel: textControl(),
        onSubmit: noControl(),
        submitProps: objectControl(),
        inputProps: objectControl(),
        spanProps: objectControl(),
        formProps: objectControl(),
        ref: noControl()
    }
} as Meta;

const Template: Story<FormProps> = (args) => <Form {...args}></Form>;

export const withPlaceholder = Template.bind({});
withPlaceholder.args = {
    autocompleteEnabled: 'on'
}

export const noPlaceholder = Template.bind({});
noPlaceholder.args = {
    autocompleteEnabled: 'off'
}