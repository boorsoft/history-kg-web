import React from "react";
import { FC } from "react";
import {
  Create,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

const PersonCreate: FC = (props) => {
  return (
    <Create title="Create a paragraph" {...props}>
      <SimpleForm>
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
    </Create>
  );
};

export default PersonCreate;
