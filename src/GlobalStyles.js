import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: Roboto, sans-serif;
    }

    ul {
        list-style: none;
    }
`;