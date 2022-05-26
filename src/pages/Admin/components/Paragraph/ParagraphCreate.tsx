import React from "react";
import { FC } from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';

const ParagraphCreate: FC = (props) => {
    return (
        <Create title='Create a paragraph' {...props}>
            <SimpleForm>
                <TextInput source="title" />
                <RichTextInput source="text" />
                <TextInput source="image" />
            </SimpleForm>
        </Create>
    )
}

export default ParagraphCreate; 