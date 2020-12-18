import React, { FunctionComponent } from 'react';
import { DefaultLayout } from '@components/Layout';
import SearchBar from '@components/SearchBar';
import { TitlePage, Small } from '@components/Typography';
import JobThumbnail from '@components/JobThumbnail';
import JobDetail from '@components/JobDetail';
import { JobDetailProps } from '@interfaces/index';

interface IndexProps {
    jobDetail: JobDetailProps;
}

const Index: FunctionComponent<IndexProps> = ({ jobDetail }: IndexProps) => {
    return (
        <>
            <SearchBar />
            <DefaultLayout>
                <Small>{`${jobDetail.type} / ${jobDetail.location}`}</Small>
                <TitlePage>{jobDetail.title}</TitlePage>
                <JobDetail {...jobDetail} />
            </DefaultLayout>
        </>
    );
};

export const getServerSideProps = async ({ req, res, query }) => {
    const jobID = query.id;
    const indexResponse = await fetch(`http://localhost:3030/get-jobs/${jobID}`);
    const jobDetail = await indexResponse.json();
    return {
        props: { jobDetail: jobDetail }
    };
};

export default Index;
