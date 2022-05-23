import React from "react";
import { FC } from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';

const PersonCreate: FC = (props) => {
    return (
        <Create  title='Create a paragraph' {...props}>
            <SimpleForm>
                <TextInput source="firstName" />
                <TextInput source="lastName" />
                <RichTextInput source="bio" />
                <TextInput source="image" />
            </SimpleForm>
        </Create>
    )
}

export default PersonCreate; 