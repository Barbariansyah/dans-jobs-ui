import React, { FunctionComponent } from 'react';
import { DefaultLayout } from '@components/Layout';
import SearchBar from '@components/SearchBar';
import { TitlePage } from '@components/Typography';
import JobThumbnail from '@components/JobThumbnail';
import { JobThumbnailProps } from '@interfaces/index';
import { useRouter } from 'next/router';

interface IndexProps {
    indexJobs: JobThumbnailProps[];
}

const Index: FunctionComponent<IndexProps> = ({ indexJobs }: IndexProps) => {
    const JobThumbnails = indexJobs.map((job) => <JobThumbnail {...job} />);

    return (
        <>
            <SearchBar />
            <DefaultLayout>
                <TitlePage>Job List</TitlePage>
                {JobThumbnails}
            </DefaultLayout>
        </>
    );
};

export const getServerSideProps = async ({ req, res, query }) => {
    let apiUrl = `http://localhost:3030/get-jobs`;
    const searchQuery = query;
    if (searchQuery) {
        apiUrl += `?`;
        for (const key in searchQuery) {
            apiUrl += `${key}=${searchQuery[key]}&`;
        }
        apiUrl.slice(0, -1);
    }
    const indexResponse = await fetch(apiUrl);
    const indexJobs = await indexResponse.json();
    return {
        props: { indexJobs: indexJobs }
    };
};

export default Index;
