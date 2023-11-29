import { Global, css } from "@emotion/react";

const style = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-collapse: collapse;
    text-decoration: none;

    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }

  li {
    list-style: none;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
  }

  input {
    outline: none;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset;
  }
`
const GlobalStyle = () => {
  return <Global styles={style} />;

}
export default GlobalStyle;