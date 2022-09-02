import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import {
  defaultLayoutPlugin,
  ToolbarProps,
  ToolbarSlot,
} from "@react-pdf-viewer/default-layout";

import styled from "styled-components";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import Header from "../../components/Header";
import { AppDispatch, RootState } from "../../store/store";
import { BASE_URL } from "../../constants/constants";
import { bindActionCreators } from "redux";
import { fetchBookById } from "../../store/app/actionCreators";
import { useParams } from "react-router-dom";

const PDFViewer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { id } = useParams();

  const { currentBook, isLoading } = useSelector(
    (state: RootState) => state.app.books
  );
  const book = currentBook;

  const getBook = bindActionCreators(fetchBookById, dispatch);
  const renderToolbar = (Toolbar: (props: ToolbarProps) => ReactElement) => (
    <Toolbar>
      {(slots: ToolbarSlot) => {
        const {
          CurrentPageInput,
          Download,
          EnterFullScreen,
          GoToNextPage,
          GoToPreviousPage,
          NumberOfPages,
          Print,
          ShowSearchPopover,
          Zoom,
          ZoomIn,
          ZoomOut,
        } = slots;
        return (
          <div
            style={{
              alignItems: "center",
              display: "flex",
              width: "100%",
            }}
          >
            <div style={{ padding: "0px 2px" }}>
              <ShowSearchPopover />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <ZoomOut />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <Zoom />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <ZoomIn />
            </div>
            <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
              <GoToPreviousPage />
            </div>
            <div style={{ padding: "0px 2px", flexDirection: "row", display: "flex", alignItems: "center" }}>
              <CurrentPageInput /> / <NumberOfPages />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <GoToNextPage />
            </div>
            <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
              <EnterFullScreen />
            </div>
            {/* <div style={{ padding: "0px 2px" }}>
              <Download />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <Print />
            </div> */}
          </div>
        );
      }}
    </Toolbar>
  );

  const zoomPluginInstance = zoomPlugin({ enableShortcuts: true });
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [],
    renderToolbar
  });

  useEffect(() => {
    id && getBook(+id);
    if (!isLoading) console.log(`${BASE_URL}/books/${book?.fileName}`);
  }, [isLoading]);

  return (
    <Wrapper>
      {/* <Header title={book ? book.title : "История Кыргызстана"} /> */}
      <Container>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
          <PDFWrapper>
            <Viewer
              plugins={[zoomPluginInstance, defaultLayoutPluginInstance]}
              defaultScale={1.0}
              fileUrl={`${BASE_URL}/books/${book?.fileName}`}
            />
          </PDFWrapper>
        </Worker>
      </Container>
    </Wrapper>
  );
};

const PDFWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  /* padding-top: 90px; */
  width: 100%;
`;

export default PDFViewer;
