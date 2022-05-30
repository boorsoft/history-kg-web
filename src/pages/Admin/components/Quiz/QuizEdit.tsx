import React from "react";
import { FC } from "react";
import { ArrayInput, BooleanInput, Create, SimpleForm, SimpleFormIterator, TextInput } from "react-admin";

const QuizEdit: FC = (props) => {
    return (
        <Create title="Create a quiz" {...props}>
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="title" />
                <ArrayInput source="questions">
                    <SimpleFormIterator>
                        <TextInput source="id" disabled />
                        <TextInput source="text" />
                        <ArrayInput source="answers">
                            <SimpleFormIterator>
                                <TextInput source="id" disabled />
                                <TextInput source="text" />
                                <BooleanInput source="isCorrectAnswer" />
                            </SimpleFormIterator>
                        </ArrayInput>
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Create>
    )
}

export default QuizEdit;