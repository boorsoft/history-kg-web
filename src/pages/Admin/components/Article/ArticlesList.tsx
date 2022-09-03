import React from "react";
import { FC } from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";

const ArticlesList: FC = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="text" maxWidth={200} />
        <EditButton resource="/articles" />
        <DeleteButton resource="articles" />
      </Datagrid>
    </List>
  );
};

export default ArticlesList;
