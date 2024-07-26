import { useState } from "react"
import ChapterNavBar from "./ChapterNavBar"

export interface ChapterProp {
    chapterId: number,
    bookId: number,
    bookTitle: String, 
    chapterTitle: String,
    chapterList: number[],
    body: String
}

export default function Chapter(prop: ChapterProp) {
    const [currentChapter, setCurrentChapter] = useState<number>(prop.chapterId)
    return <>
        <h1>{prop.bookTitle}</h1>
        <ChapterNavBar bookId={prop.bookId} currentChapterId={currentChapter} chapterList={prop.chapterList} setChapter={setCurrentChapter}/>
        <h2>{prop.chapterTitle}</h2>
        <p>{prop.body}</p>
        <ChapterNavBar bookId={prop.bookId} currentChapterId={currentChapter} chapterList={prop.chapterList} setChapter={setCurrentChapter}/>
    </>
}