import React, { FunctionComponent, ReactNode } from 'react';
import Link from 'next/link';

interface LinkWrapperProps {
    link: string;
    as?: string;
    children: ReactNode;
}

const LinkWrapper: FunctionComponent<LinkWrapperProps> = (props: LinkWrapperProps) => {
    return (
        <Link as={props.as} href={props.link} passHref>
            {props.children}
        </Link>
    );
};

export default LinkWrapper;
