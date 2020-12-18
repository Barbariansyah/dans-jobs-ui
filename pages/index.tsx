import React, { FunctionComponent } from 'react';
import Hello from '@components/Hello';
import { DefaultLayout } from '@components/Layout';
import SearchBar from '@components/SearchBar';
import { TitlePage } from '@components/Typography';
import JobThumbnail from '@components/JobThumbnail';

const placeholder = {
    id: 'dasada',
    title: 'Data Engineer',
    company: 'EME Hive',
    type: 'Full Time',
    location: 'Berlin',
    createdAt: '18 Des 2020'
};

const Index: FunctionComponent = () => {
    return (
        <>
            <SearchBar />
            <DefaultLayout>
                <TitlePage>Job List</TitlePage>
                <JobThumbnail {...placeholder} />
            </DefaultLayout>
        </>
    );
};

export default Index;
