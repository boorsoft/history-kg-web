import React from "react";
import { FC } from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';

const ParagraphEdit: FC = (props) => {
    return (
        <Edit  title='Edit the paragraph' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source="title" />
                <RichTextInput source="text" />
                <TextInput source="image" />
            </SimpleForm>
        </Edit>
    )
}

export default ParagraphEdit;