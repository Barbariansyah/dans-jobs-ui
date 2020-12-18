import React, { FunctionComponent } from 'react';
import { InputTitle, TextInput, TextFieldStyle } from './style';

interface TextFieldProps {
    title: string;
}

const TextField: FunctionComponent<TextFieldProps> = (props: TextFieldProps) => {
    return (
        <TextFieldStyle>
            <InputTitle>{props.title}</InputTitle>
            <TextInput />
        </TextFieldStyle>
    );
};

export default TextField;
