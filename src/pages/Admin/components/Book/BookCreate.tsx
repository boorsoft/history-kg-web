import React from "react";
import { FC } from "react";
import {
    Create,
    SimpleForm,
    TextInput,
    required,
    FileInput,
    FileField,
} from "react-admin";

const BookCreate: FC = (props) => {
    return (
        <Create title="Create a paragraph" {...props}>
            <SimpleForm>
                <TextInput source="title" validate={required()} />
                <FileInput
                    maxSize={50000000}
                    source="file"
                    multiple={false}
                    label="Book file"
                    accept="application/pdf"
                >
                    <FileField source="fileName" title="title" />
                </FileInput>
            </SimpleForm>
        </Create>
    );
};

export default BookCreate;
