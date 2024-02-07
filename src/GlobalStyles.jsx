import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body{
  font-family: 'Jost', sans-serif;
  font-size: 16px;
  font-weight:500;
  background-color: ${({ theme }) => theme.colors.body_background};
  box-sizing:border-box;
}
main {

}
input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
  padding: 0;
  border: 0;
  background:transparent;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
  background:transparent;
}
a {
  color: inherit;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul ,li {
  list-style: none;
  padding:0;
  margin:0;
}
img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6,
p{
  font-size: inherit;
  font-weight: 500;
margin:0;
}

img {
  max-width: 100%;
  height: auto;
}
*:focus {
    outline: none;
}

`;
