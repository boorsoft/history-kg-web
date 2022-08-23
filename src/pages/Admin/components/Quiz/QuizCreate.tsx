import React from "react";
import { FC } from "react";
import {
  ArrayInput,
  BooleanInput,
  Create,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  required,
  ReferenceInput,
  SelectInput,
} from "react-admin";

const QuizCreate: FC = (props) => {
  return (
    <Create title="Create a quiz" {...props}>
      <SimpleForm>
        <TextInput source="title" validate={required()} />
        <ReferenceInput source="subjectId" reference="subjects">
          <SelectInput optionText="title" validate={required()} />
        </ReferenceInput>
        <ArrayInput source="questions" validate={required()}>
          <SimpleFormIterator>
            <TextInput source="text" validate={required()} />
            <ArrayInput source="answers" validate={required()}>
              <SimpleFormIterator>
                <TextInput source="text" validate={required()} />
                <BooleanInput source="isCorrectAnswer" defaultValue={false} validate={required()} />
              </SimpleFormIterator>
            </ArrayInput>
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};

export default QuizCreate;
