import React, { FunctionComponent } from 'react';
import { JobThumbnailStyle, LeftSection, RightSection, Row } from './style';
import { Bold, Thin, Regular } from '@components/Typography';
import LinkWrapper from '@components/LinkWrapper';

interface JobThumbnailProps {
    id: string;
    title: string;
    company: string;
    type: string;
    location: string;
    createdAt: string;
}

const JobThumbnail: FunctionComponent<JobThumbnailProps> = (props: JobThumbnailProps) => {
    const detailUrl = `/job/${props.id}`;

    return (
        <LinkWrapper link={detailUrl}>
            <JobThumbnailStyle>
                <LeftSection>
                    <Bold>{props.title}</Bold>
                    <Row>
                        <Thin>{props.company}</Thin>
                        <Bold>{props.type}</Bold>
                    </Row>
                </LeftSection>
                <RightSection>
                    <Regular>{props.location}</Regular>
                    <Thin>{props.createdAt}</Thin>
                </RightSection>
            </JobThumbnailStyle>
        </LinkWrapper>
    );
};

export default JobThumbnail;
