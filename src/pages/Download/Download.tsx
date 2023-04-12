import React from "react";
import Header from "../../components/Header";
import styled from "styled-components";
import { BiDownload } from "react-icons/bi";
import { Container } from "../Home/Home";
import { BASE_URL } from "../../constants/constants";

const StyledDownload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;

const DownloadIcon = styled(BiDownload)`
  width: 50px;
  height: 50px;
`;

const Download = () => {
  return (
    <>
      <Header title="Скачать приложение" />
      <Container>
        <StyledDownload
          onClick={() => window.open(`${BASE_URL}/app/history_kg.apk`)}
        >
          <DownloadIcon />
          Скачать приложение
        </StyledDownload>
      </Container>
    </>
  );
};

export default Download;
