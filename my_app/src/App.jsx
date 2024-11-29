import React from 'react';
import styled from 'styled-components';
import Div_Header from "./Div_Header"
import Divwithrecipes from "./Divwithrecipes.jsx";
import Div_contact from "./div_contact.jsx";
import Div_bottom from "./div_bottom.jsx";

function App() {
  return (
    <>
      <Div_Header />
      <Divwithrecipes />
      <Div_contact />
      <Div_bottom />
    </>
  );
}

export default App
