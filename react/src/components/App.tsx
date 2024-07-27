import { useState } from 'react'
import '../css/App.css'
import Chapter from './Chapter'

function App() {

  return (
    <>
      <Chapter chapterId={1} bookId={2}/>
    </>
  )
}

export default App