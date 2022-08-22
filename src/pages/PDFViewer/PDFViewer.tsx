import React from "react"
import { useSelector } from "react-redux"
import Header from "../../components/Header"
import { RootState } from "../../store/store"
import { Book } from "../../types/store/AppState"

const PDFViewer = () => {
  const book = useSelector((state: RootState) => state.app.books.currentBook)

  return (
    <>
      <Header title={book!.title} />
    </>
  )
}

export default PDFViewer;