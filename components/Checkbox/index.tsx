import React, { FunctionComponent, useState } from 'react';
import { CheckboxInput, CheckboxStyle, CheckboxTitle } from './style';

interface CheckboxProps {
    title: string;
    onValueChange: (checked: boolean) => void;
}

const CheckboxField: FunctionComponent<CheckboxProps> = (props: CheckboxProps) => {
    const [checked, setChecked] = useState(false);
    const handleClick = () => {
        setChecked(!checked);
        props.onValueChange(checked);
    };

    return (
        <CheckboxStyle>
            <CheckboxInput onClick={handleClick} checked={checked} type="checkbox" />
            <CheckboxTitle>{props.title}</CheckboxTitle>
        </CheckboxStyle>
    );
};

export default CheckboxField;
