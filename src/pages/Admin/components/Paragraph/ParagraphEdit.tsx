import React from "react";
import { FC } from "react";
import { Edit, required, SimpleForm, TextInput } from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';
import CustomRichTextInput from "../../../../components/CustomRichTextInput";

const ParagraphEdit: FC = (props) => {
    return (
        <Edit  title='Edit the paragraph' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source="title" validate={required()} />
                <CustomRichTextInput source="text" validate={required()} />
                <TextInput source="image" validate={required()} />
            </SimpleForm>
        </Edit>
    )
}

export default ParagraphEdit;