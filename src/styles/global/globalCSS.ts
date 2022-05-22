import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
        overflow-x: hidden;
    }

    main {
        width: 100vw;
        height: max-content;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: hsl(0, 0%, 98%);
        color: #ddd;
        background-image: url('/Meteor.svg');
        background-size: cover;
    }
`;
