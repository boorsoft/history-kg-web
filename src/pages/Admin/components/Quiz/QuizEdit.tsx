import React from "react";
import { FC } from "react";
import {
  ArrayInput,
  BooleanInput,
  Edit,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

const QuizEdit: FC = (props) => {
  return (
    <Edit title="Create a quiz" {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="title" validate={required()} />
        <ReferenceInput source="subjectId" reference="subjects">
          <SelectInput optionText="title" validate={required()} />
        </ReferenceInput>
        <ArrayInput source="questions">
          <SimpleFormIterator>
            {/* <TextInput source="id" disabled /> */}
            <TextInput source="text" />
            <ArrayInput source="answers">
              <SimpleFormIterator>
                {/* <TextInput source="id" disabled /> */}
                <TextInput source="text" />
                <BooleanInput source="isCorrectAnswer" />
              </SimpleFormIterator>
            </ArrayInput>
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};

export default QuizEdit;
