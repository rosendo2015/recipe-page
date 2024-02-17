import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: "Outfit", sans-serif;
    
    background-color: ${({ theme }) => theme.COLORS.White};
    color: ${({ theme }) => theme.COLORS.Dark_Charcoal};
    -webkit-font-smoothing: antialiased;

}
`