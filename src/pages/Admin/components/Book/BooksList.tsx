import React from "react";
import { FC } from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ReferenceField,
} from "react-admin";

const BooksList: FC = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="author" />
        <TextField source="city" />
        <TextField source="year" />
        <TextField source="fileName" />
        <ReferenceField label="Subject" source="subjectId" reference="subjects">
          <TextField source="title" />
        </ReferenceField>
        <EditButton resource="/books" />
        <DeleteButton resource="books" />
      </Datagrid>
    </List>
  );
};

export default BooksList;
