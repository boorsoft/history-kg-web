import React, { FC } from "react"
import { Datagrid, List, TextField } from "react-admin";

const SubjectList: FC = (props) => {
  return <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
    </Datagrid>
  </List>
}

export default SubjectList;