import React, { FunctionComponent } from 'react';
import { CheckboxInput, CheckboxStyle, CheckboxTitle } from './style';

interface CheckboxProps {
    title: string;
}

const CheckboxField: FunctionComponent<CheckboxProps> = (props: CheckboxProps) => {
    return (
        <CheckboxStyle>
            <CheckboxInput type="checkbox" />
            <CheckboxTitle>{props.title}</CheckboxTitle>
        </CheckboxStyle>
    );
};

export default CheckboxField;
