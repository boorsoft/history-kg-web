import React from "react";
import { FC } from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';

const PersonEdit: FC = (props) => {
    return (
        <Edit  title='Edit the paragraph' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source="firstName" />
                <TextInput source="lastName" />
                <RichTextInput source="bio" />
                <TextInput source="image" />
            </SimpleForm>
        </Edit>
    )
}

export default PersonEdit;