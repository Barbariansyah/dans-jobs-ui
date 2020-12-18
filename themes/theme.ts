// my-theme.ts
import { DefaultTheme } from 'styled-components';

const mainTheme: DefaultTheme = {
    borderRadius: '4px',

    colors: {
        ice: '#eeeeee',
        lightGreen: '#36b582',
        green: '#0d7377',
        lightGray: '#e8e8e8',
        gray: '#5c5c5c',
        black: '#212121'
    },

    breakpoints: {
        sm: '320px',
        md: '768px',
        lg: '1200px',
        xl: '1900px'
    }
};

export { mainTheme };
