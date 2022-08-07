import React from "react";
import { FC } from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

const BooksList: FC = (props) => {
  return <List {...props}>
      <Datagrid>
          <TextField source="id" />
          <TextField source="title" />
          <TextField source="fileName" />
          <EditButton resource="/books" />
          <DeleteButton resource="books" />
      </Datagrid>
  </List>;
};

export default BooksList;
