import React from "react";
import { FC } from "react";
import {
  Create,
  FileField,
  FileInput,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

const PersonCreate: FC = (props) => {
  return (
    <Create title="Create a person" {...props}>
      <SimpleForm>
        <TextInput source="firstName" validate={required()} />
        <TextInput source="lastName" validate={required()} />
        <RichTextInput source="bio" validate={required()} />
        <FileInput
          maxSize={100000000}
          source="image"
          validate={required()}
          multiple={false}
          accept="image/*"
        >
          <FileField title="title" source="image" />
        </FileInput>
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
