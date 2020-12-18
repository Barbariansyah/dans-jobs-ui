import React, { FunctionComponent } from 'react';
import { JobDetailStyle, LeftSection, RightSection, Card } from './style';
import { Image } from '@components/Image';
import { JobDetailProps } from '@interfaces/index';

const JobDetail: FunctionComponent<JobDetailProps> = ({
    description,
    company_logo,
    how_to_apply,
    company_url
}: JobDetailProps) => {
    // const parseHtml = (val: string) => {
    //     let res = val;
    //     res = res.replace('<', '&lt;');
    //     res = res.replace('>', '&gt;');
    //     return res;
    // };

    return (
        <JobDetailStyle>
            <LeftSection dangerouslySetInnerHTML={{ __html: description }} />
            <RightSection>
                <Card>
                    <Image w="240px" h="240px" img={company_logo} />
                    {company_url}
                </Card>
                <Card dangerouslySetInnerHTML={{ __html: how_to_apply }} />
            </RightSection>
        </JobDetailStyle>
    );
};

export default JobDetail;
