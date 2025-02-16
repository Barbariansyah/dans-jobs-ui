import React, { FunctionComponent } from 'react';
import { DefaultLayout } from '@components/Layout';
import SearchBar from '@components/SearchBar';
import { TitlePage } from '@components/Typography';
import JobThumbnail from '@components/JobThumbnail';
import { JobThumbnailProps } from '@interfaces/index';

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

export const getServerSideProps = async ({ req, res }) => {
    const indexResponse = await fetch(`http://localhost:3030/get-jobs`);
    const indexJobs = await indexResponse.json();
    return {
        props: { indexJobs: indexJobs }
    };
};

export default Index;
