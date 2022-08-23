import React from "react";
import { FC } from "react";
import { Edit, ReferenceField, required, SelectInput, SimpleForm, TextInput } from "react-admin";

const BookEdit: FC = (props) => {
    return (
        <Edit  title='Edit the book' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source="title" validate={required()} />
                <ReferenceField source="subjectId" reference="subjects">
                    <SelectInput optionText="title" validate={required()} />
                </ReferenceField>
                <TextInput disabled source="fileName" validate={required()} />
            </SimpleForm>
        </Edit>
    )
}

export default BookEdit;