import styled from 'styled-components';

interface ImageProps {
    w: string;
    h: string;
    img: string;
    ws?: string;
    hs?: string;
    largeOnly?: boolean;
}

export const Image = styled.div<ImageProps>`
    height: ${(props) => props.h};
    width: ${(props) => props.w};
    background-image: url(${(props) => props.img});
    background-size: contain;
    background-position: center;
    @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        display: ${(props) => (props.largeOnly ? 'none' : 'block')};
        height: ${(props) => (props.hs ? props.hs : props.h)};
    }
    background-repeat: no-repeat;
`;
