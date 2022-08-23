import React from "react";
import { FC } from "react";
import {
  Edit,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

const PersonEdit: FC = (props) => {
  return (
    <Edit title="Edit the paragraph" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" validate={required()} />
        <TextInput source="firstName" validate={required()} />
        <TextInput source="lastName" validate={required()} />
        <RichTextInput source="bio" validate={required()} />
        <TextInput source="image" validate={required()} />
        <ReferenceInput
          source="subjectId"
          reference="subjects"
          validate={required()}
        >
          <SelectInput optionText="title" validate={required()} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

export default PersonEdit;
