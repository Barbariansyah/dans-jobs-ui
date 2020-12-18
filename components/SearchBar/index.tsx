import React, { FunctionComponent, useState } from 'react';
import { SearchBarStyle } from './style';
import TextField from '@components/TextField';
import Checkbox from '@components/Checkbox';
import { Button } from '@components/Button';
import LinkWrapper from '@components/LinkWrapper';
import { Bold } from '@components/Typography';

const SearchBar: FunctionComponent = () => {
    const [jobDesc, setJobDesc] = useState('');
    const [location, setLocation] = useState('');
    const [query, setQuery] = useState('');
    const [fulltime, setFulltime] = useState(false);

    const processSpace = (val: string): string => {
        return val.replace(' ', '+');
    };

    const changeJobDesc = (val: string) => {
        setJobDesc(processSpace(val));
        if (location.length > 0) {
            setQuery(`/search?description=${processSpace(val)}&location=${location}&full_time=${fulltime}`);
        } else {
            setQuery(`/search?description=${processSpace(val)}&full_time=${fulltime}`);
        }
    };

    const changeLocation = (val: string) => {
        setLocation(processSpace(val));
        if (jobDesc.length > 0) {
            setQuery(`/search?description=${jobDesc}&location=${processSpace(val)}&full_time=${fulltime}`);
        } else {
            setQuery(`/search?location=${processSpace(val)}&full_time=${fulltime}`);
        }
    };

    const changeFulltime = (checked: boolean) => {
        setFulltime(!checked);
        if (jobDesc.length > 0 && location.length > 0) {
            setQuery(`/search?description=${jobDesc}&location=${location}&full_time=${!checked}`);
        } else if (location.length > 0) {
            setQuery(`/search?location=${location}&full_time=${!checked}`);
        } else if (jobDesc.length > 0) {
            setQuery(`/search?description=${jobDesc}&full_time=${!checked}`);
        } else {
            setQuery(`/full_time=${!checked}`);
        }
    };

    return (
        <SearchBarStyle>
            <LinkWrapper link="/">
                <Bold>Github Jobs</Bold>
            </LinkWrapper>
            <TextField title="Job Description" onValueChange={changeJobDesc} />
            <TextField title="Location" onValueChange={changeLocation} />
            <Checkbox title="Full Time Only" onValueChange={changeFulltime} />
            <Button href={query} w="144px" h="36px" ph="Search" c="white" bc="black" />
        </SearchBarStyle>
    );
};

export default SearchBar;
