import React from "react";
import { FC } from "react";
import { Edit, required, SimpleForm, TextInput } from "react-admin";

const BookEdit: FC = (props) => {
    return (
        <Edit  title='Edit the book' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source="title" validate={required()} />
                <TextInput disabled source="fileName" validate={required()} />
            </SimpleForm>
        </Edit>
    )
}

export default BookEdit;