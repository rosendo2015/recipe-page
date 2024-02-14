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
  margin: 1rem 0 1rem;
  border-radius: 8px;
  padding: 1rem;
  font-family: "Outfit", sans-serif;
  background-color: ${({theme})=>theme.COLORS.Rose_White};
}
.preparation h4{
  color: ${({theme})=>theme.COLORS.Dark_Raspberry};
  margin-bottom: 1rem;
  margin-left: 1.5rem;
  font-size: 1.2rem;
}
.preparation ul{
  margin-left: 3rem;
  font-size: 1.2rem;
}
.preparation ul li{
  
  list-style: ${({theme})=>theme.COLORS.Dark_Raspberry};
}
  



` 