import React from "react";
import { FC } from "react";
import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

const QuizList: FC = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <ReferenceField label="Subject" source="subjectId" reference="subjects">
          <TextField source="title" />
        </ReferenceField>
        <EditButton resource="/quiz" />
        <DeleteButton resource="quiz" />
      </Datagrid>
    </List>
  );
};

export default QuizList;
