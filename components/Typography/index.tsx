import styled from 'styled-components';

interface ColorProps {
    color?: string;
}

export const TitlePage = styled.h1``;

export const Bold = styled.div`
    font-size: 24px;
    font-weight: 500;
    color: ${(props) => (props.color ? props.color : '#000')};
    margin: 4px 8px;
`;

export const Regular = styled.div<ColorProps>`
    font-size: 24px;
    font-weight: 400;
    color: ${(props) => (props.color ? props.color : '#000')};
    margin: 4px 8px;
`;

export const Thin = styled.div<ColorProps>`
    font-size: 24px;
    font-weight: 300;
    color: ${(props) => (props.color ? props.color : '#000')};
    margin: 4px 8px;
`;
