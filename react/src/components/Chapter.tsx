import { useState } from "react";
import ChapterNavBar from "./ChapterNavBar";
import '../css/Chapter.css';

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
    const paragraphs: string[] = prop.body.split("\n");
    return <div className="chapterPage">
        <h1>{prop.bookTitle}</h1>
        <ChapterNavBar bookId={prop.bookId} currentChapterId={currentChapter} chapterList={prop.chapterList} setChapter={setCurrentChapter}/>
        <h2>{prop.chapterTitle}</h2>
        {paragraphs.map(paragraph => <p>{paragraph}</p>)}
        <ChapterNavBar bookId={prop.bookId} currentChapterId={currentChapter} chapterList={prop.chapterList} setChapter={setCurrentChapter}/>
    </div>;
}