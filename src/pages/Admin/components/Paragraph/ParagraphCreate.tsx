import React from "react";
import { FC } from "react";
import { Create, SimpleForm, TextInput, required } from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';
import CustomRichTextInput from "../../../../components/CustomRichTextInput";

const ParagraphCreate: FC = (props) => {
    return (
        <Create title='Create a paragraph' {...props}>
            <SimpleForm>
                <TextInput source="title" validate={required()} />
                <CustomRichTextInput source="text" validate={required()} />
                <TextInput source="image" validate={required()} />
            </SimpleForm>
        </Create>
    )
}

export default ParagraphCreate; 