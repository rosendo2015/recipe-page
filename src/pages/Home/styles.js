import styled from 'styled-components'

export const Container = styled.div`
width: 375px;
padding: 1rem;
margin: auto;
font-size: 1rem;
line-height: 200%;
img{
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
}
h1, h2, h4{
  font-family: "Young Serif", serif;
  font-weight: 500;
  font-size: 2rem;
} 
h1{
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 110%;
}
h2{
  color: ${({theme})=>theme.COLORS.Nutmeg};
  font-weight: 500;
  margin: 1rem 0;
}
.preparation{
  margin: 1rem 0 1rem;
  border-radius: 8px;
  padding: 1rem;
  font-family: "Outfit", sans-serif;
  background-color: ${({theme})=>theme.COLORS.Rose_White};
}
.preparation h4{
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  color: ${({theme})=>theme.COLORS.Dark_Raspberry};
  margin-bottom: 1rem;
  margin-left: 1.5rem;
  font-size: 1.2rem;
}

.preparation ul{
  margin-left: 3rem;
  font-size: 1.2rem;
}
.preparation ul li::before {
  content: '*'; 
  color: ${({theme})=>theme.COLORS.Dark_Raspberry};
  display: inline-block; 
  width: 2rem;
  margin-left: -1em;
}
ul, ol{
  margin-left: 1rem;
  
}
ol{
  list-style: none;
  counter-reset: li;
  
}
ol li{
  margin-bottom: 1rem;
}
ol li::before{
  content: counter(li);
  counter-increment: li;
  color: ${({theme})=>theme.COLORS.Nutmeg};
  display: inline-block;
  width: 1rem;
  margin-left: -1em;
  font-weight: 500;
}


ul li{
  list-style: none;
  margin-right: 1rem;
}
ul li::before {
  content: "*"; 
  color: ${({theme})=>theme.COLORS.Nutmeg};
  display: inline-block; 
  width: 2rem;
  margin-left: -1em;
}
table{
  width: 100%;
  margin-top: 1.5rem;
}

tr{
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({theme})=>theme.COLORS.Wenge_Brown};  
  padding: 1rem 0;
}  
td:nth-child(2){
  font-weight: 500;
  color: ${({theme})=>theme.COLORS.Nutmeg};
}
@media (min-width: 700px) {
  width: 600px;
}

` 