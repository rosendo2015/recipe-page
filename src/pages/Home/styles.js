import styled from 'styled-components'

export const Container = styled.div`
max-width: 375px;
padding: 1rem;
margin: auto;
img{
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
}
h1{
  margin-bottom: 1rem;
}
h2{
  color: ${({theme})=>theme.COLORS.Nutmeg};
  font-weight: 500;

}
.preparation{
  margin: 1.5rem 0 1.5rem;
  font-family: "Outfit", sans-serif;
  
}
.preparation h4{
  color: ${({theme})=>theme.COLORS.Dark_Raspberry};
}
  



` 