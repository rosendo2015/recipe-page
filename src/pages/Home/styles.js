import styled from 'styled-components'

export const Container = styled.div`
max-width: 375px;
padding: 1rem;
margin: auto;
font-size: 1rem;
line-height: 200%;
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
  margin: 2rem;
  font-family: "Outfit", sans-serif;
  
}
.preparation h4{
  color: ${({theme})=>theme.COLORS.Dark_Raspberry};
  margin-left: -1rem;
  margin-bottom: 1rem;
}
  



` 