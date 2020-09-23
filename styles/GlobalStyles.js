import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
    }

    a, button, input {
        border: 0;
        outline: 0;

        text-decoration: none;

        font-family: 'Montserrat', sans-serif;    
        }

        a {
            color: black;
        }

        ul, li  {
            list-style: none;
        }

        h1 {
            font-family: 'Comfortaa', sans-serif;
            font-weight: bold;
        }

:root {
    --primary: #F48B80;
    --secondary: #F4C780;
    --terciary: #5A7AA0;
    --quaternary: #D74637;
    --quinary: #D79937;
    --senary: #61B874;

    --white: #FFFFFF;
    --black: #000000;
    --grey: #AAAAAA;
    --greyVariant: #767676;
    
    --link: #61B874;

    --divider: #FF7135;

    --button: #F48A80;

}
`;
