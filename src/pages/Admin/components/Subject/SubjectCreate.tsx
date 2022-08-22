import React, { FC } from "react";
import { Create, required, SimpleForm, TextInput } from "react-admin";

const SubjectCreate: FC = (props) => {
  return (
    <Create title="Create a subject" {...props}>
      <SimpleForm>
        <TextInput source="title" validate={required()}/>
      </SimpleForm>
    </Create>
  )
}

export default SubjectCreate;