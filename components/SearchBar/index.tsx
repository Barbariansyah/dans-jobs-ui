import React, { FunctionComponent } from 'react';
import { SearchBarStyle } from './style';
import TextField from '@components/TextField';
import Checkbox from '@components/Checkbox';
import { ActionButton } from '@components/Button';

const SearchBar: FunctionComponent = () => {
    return (
        <SearchBarStyle>
            <TextField title="Job Description" />
            <TextField title="Location" />
            <Checkbox title="Full Time Only" />
            <ActionButton w="144px" h="36px" ph="Search" c="white" bc="black" />
        </SearchBarStyle>
    );
};

export default SearchBar;
