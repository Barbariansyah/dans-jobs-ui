import styled from 'styled-components';

export const SearchBarStyle = styled.div`
    margin: 0 auto;
    max-width: 100vw;
    font-family: 'Work Sans';
    background-color: ${(props) => props.theme.colors.lightGreen};
    padding: 24px 72px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
