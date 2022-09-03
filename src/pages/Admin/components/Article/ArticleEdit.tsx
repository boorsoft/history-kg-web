import React from "react";
import { FC } from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  ReferenceInput,
  SelectInput
} from "react-admin";
import CustomRichTextInput from "../../../../components/CustomRichTextInput";

const ArticleEdit: FC = (props) => {
  return (
    <Edit title="Create a paragraph" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" validate={required()} />
        <CustomRichTextInput source="text" />
        <ReferenceInput source="subjectId" reference="subjects" validate={required()}>
            <SelectInput optionText="title" validate={required()} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

export default ArticleEdit;
