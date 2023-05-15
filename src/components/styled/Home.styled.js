import styled from 'styled-components'
export const HomeStyle = styled.div`
width: 960px;
margin: 0 auto;
padding: 0 2em;
background-color: ${(({theme}) => theme.colors.body)};
text-align: left;
ul {list-style: none;}
h1 {font-size:4em}
`