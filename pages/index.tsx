import React, { FunctionComponent } from 'react';
import Hello from '@components/Hello';
import { DefaultLayout } from '@components/Layout';
import SearchBar from '@components/SearchBar';

const Index: FunctionComponent = () => {
    return (
        <>
            <SearchBar />
            <DefaultLayout></DefaultLayout>
        </>
    );
};

export default Index;
