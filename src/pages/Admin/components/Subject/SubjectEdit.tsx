import React, { FC } from "react";
import { Edit, required, SimpleForm, TextInput } from "react-admin";

const SubjectEdit: FC = (props) => {
  return (
    <Edit title="Edit the subject" {...props}>
      <SimpleForm>
        <TextInput source="title" validate={required()} />
      </SimpleForm>
    </Edit>
  )
}

export default SubjectEdit;