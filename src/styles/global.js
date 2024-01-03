import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Roboto Slab' ;
        background-color: ${({ theme }) => theme.BACKGROUND.BACKGROUND_900};

        h1 {
            color: #FFFFFF;
        }
        h2 {
            color: #FFFFFF;
            font-size: 20px;
        }
    }
`