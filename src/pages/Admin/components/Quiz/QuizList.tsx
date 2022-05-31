import React from "react";
import { FC } from "react";
import { Datagrid, DeleteButton, EditButton, List, TextField } from "react-admin";

const QuizList: FC = (props) => {
    return <List {...props} >
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <EditButton resource="/quiz" />
            <DeleteButton resource="/quiz" />
        </Datagrid>
    </List>
}

export default QuizList;