import { useState } from 'react'
import '../css/App.css'
import Chapter from './Chapter'

function App() {

  return (
    <>
      <Chapter chapterId={0} bookId={0} bookTitle={"bookTitle"} chapterTitle={"Example Title"} chapterList={[0, 1, 2, 3, 4, 5]} body={"adfagagadg"}/>
    </>
  )
}

export default App
