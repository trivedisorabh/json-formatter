import React, { useState } from 'react';
import styled from "styled-components";
import { Button } from "buffetjs";
import PropTypes from "prop-types";

import UploadFile from './UploadFile';
import Seperator from './Seperator';
import JsonUrl from "./JsonUrl";

const Container = styled.form`
  background-color: #FFFFFF;
  min-height: 20rem;
  width: 30vw;
  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  padding: 1rem;
  padding: 3rem 0;
`;

function UploadBanner({ setValue, close }) {
  const [jsonData, setJsonData] = useState(null);
  const setEditor = (event) => {
    event.preventDefault();
    if(jsonData) {
      setValue(jsonData);
      close();
    }
  }
  return (
    <Container onSubmit={setEditor}>
      <UploadFile setData={setJsonData} />
      <Seperator />
      <JsonUrl setData={setJsonData} />
      <Button type="submit" css={`margin: 1rem auto; text-align: center; display: block;`}>Load</Button>
    </Container>
  );
}

UploadBanner.propTypes = {
  setValue: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
}

export default UploadBanner;
