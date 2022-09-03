import React from "react";
import { FC } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  ReferenceInput,
  SelectInput
} from "react-admin";
import CustomRichTextInput from "../../../../components/CustomRichTextInput";

const ArticleCreate: FC = (props) => {
  return (
    <Create title="Create a paragraph" {...props}>
      <SimpleForm>
        <TextInput source="title" validate={required()} />
        <CustomRichTextInput source="text" />
        <ReferenceInput source="subjectId" reference="subjects" validate={required()}>
            <SelectInput optionText="title" validate={required()} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default ArticleCreate;
