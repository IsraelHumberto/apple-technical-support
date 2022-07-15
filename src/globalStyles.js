import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', Helvetica, Sans-Serif;
    }

    ul, li {
        list-style: none;
    }

    img {
        width: 100%;
        display: block;
    }

    h1 {
        font-size: 3em;
    }

    h5 {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 768px) {
        h1 {
            font-size: 32px;
        }

        h5 {
            font-size: 1.2rem;
        }
    }
`;

export default GlobalStyle;

