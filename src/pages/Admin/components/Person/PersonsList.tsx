import React from "react";
import { FC } from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

const PersonsList: FC = (props) => {
  return <List {...props}>
      <Datagrid>
          <TextField source="id" />
          <TextField source="firstName" />
          <TextField source="lastName" />
          <TextField source="bio" />
          <TextField source="image" />
          <EditButton resource="/persons" />
          <DeleteButton resource="/persons" />
      </Datagrid>
  </List>;
};

export default PersonsList;
