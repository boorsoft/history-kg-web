import React from "react";
import { FC } from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

const ParagraphsList: FC = (props) => {
  return <List {...props}>
      <Datagrid>
          <TextField source="id" />
          <TextField source="title" />
          <TextField source="image" />
          <EditButton resource="/paragraphs" />
          <DeleteButton resource="paragraphs" />
      </Datagrid>
  </List>;
};

export default ParagraphsList;
