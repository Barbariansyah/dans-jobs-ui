import styled from 'styled-components';

interface ButtonProps {
    w: string;
    h: string;
    bc?: string;
    c?: string;
    ws?: string;
    hs?: string;
    margin?: string;
}

export const ButtonStyle = styled.a<ButtonProps>`
    display: flex;
    background-color: ${(props) => props.bc || 'unset'};
    width: ${(props) => props.w};
    height: ${(props) => props.h};
    color: ${(props) => props.c || props.theme.colors.green};
    text-decoration: none;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    :hover {
        cursor: pointer;
    }
`;

export const CenterButtonStyle = styled.a<ButtonProps>`
    display: flex;
    background-color: ${(props) => props.bc || 'unset'};
    width: ${(props) => props.w};
    height: ${(props) => props.h};
    color: ${(props) => props.c || props.theme.colors.green};
    text-decoration: none;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    :hover {
        cursor: pointer;
    }
`;

export const ActionButtonStyle = styled.button<ButtonProps>`
    display: flex;
    background-color: ${(props) => props.bc || 'unset'};
    width: ${(props) => props.w};
    height: ${(props) => props.h};
    color: ${(props) => props.c || props.theme.colors.green};
    text-decoration: none;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    border: none;
    margin: ${(props) => props.margin || 'unset'};
    :hover {
        cursor: pointer;
    }
    :focus {
        outline: none;
    }
`;
