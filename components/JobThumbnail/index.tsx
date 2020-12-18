import React, { FunctionComponent } from 'react';
import { JobThumbnailStyle, LeftSection, RightSection, Row } from './style';
import { Bold, Thin, Regular } from '@components/Typography';
import LinkWrapper from '@components/LinkWrapper';
import { JobThumbnailProps } from '@interfaces/index';

const JobThumbnail: FunctionComponent<JobThumbnailProps> = (props: JobThumbnailProps) => {
    const detailUrl = `/job/${props.id}`;

    const creationDate = props.created_at.split(' ', 3).join(' ');

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
                    <Thin>{creationDate}</Thin>
                </RightSection>
            </JobThumbnailStyle>
        </LinkWrapper>
    );
};

export default JobThumbnail;
