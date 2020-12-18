import React, { FunctionComponent } from 'react';
import { InputTitle, TextInput, TextFieldStyle } from './style';

interface TextFieldProps {
    title: string;
    onValueChange: (val: string) => void;
}

const TextField: FunctionComponent<TextFieldProps> = (props: TextFieldProps) => {
    const handleChange = (val: string) => {
        props.onValueChange(val);
    };

    return (
        <TextFieldStyle>
            <InputTitle>{props.title}</InputTitle>
            <TextInput onChange={(e) => handleChange(e.target.value)} />
        </TextFieldStyle>
    );
};

export default TextField;
