import { useEffect, useRef, useState } from "react";
import ChapterNavBar from "./ChapterNavBar";
import '../css/Chapter.css';

export interface ChapterProp {
    chapterId: number,
    bookId: number,
}

interface ChapterResponse {
    chapterId: number,
    bookId: number,
    bookTitle: String,
    chapterTitle: String,
    body: String
}

interface BookResponse {
    bookId: number,
    bookTitle: String,
    authors: String[],
    chapterList: number[]
}

export default function Chapter(prop: ChapterProp) {
    const bookId = useRef<number>(prop.bookId);
    const currentChapter = useRef<number>(prop.chapterId);
    const bookTitle = useRef<String>("");
    const chapterTitle = useRef<String>("");
    const chapterList = useRef<number[]>([]);
    const body = useRef<String>("");
    const ipAddress = "http://localhost:";
    const portNumber = "8080";

    function setCurrentChapter(chapterId: number): void {
        currentChapter.current = chapterId;
    }

    useEffect(() => {
        const apiEndpoint = ipAddress + portNumber + "/content/" + prop.bookId + "/" + prop.chapterId;
        fetch('http://localhost:8080/content/1/1')
            .then(response => response.json())
            .then(data => {
                bookTitle.current = (data as unknown as ChapterResponse).bookTitle;
                chapterTitle.current = (data as unknown as ChapterResponse).chapterTitle;
                body.current = (data as unknown as ChapterResponse).body;
            });
        console.log(body.current);
    }, [currentChapter]);

    useEffect(() => {
        fetch('http://localhost:8080/content/1')
        .then(response => response.json)
        .then(data => chapterList.current = (data as unknown as BookResponse).chapterList);
    }, [bookId]);

    const paragraphs: string[] = body.current.split("\n");
    return <div className="chapterPage">
        <h1>{bookTitle.current}</h1>
        <ChapterNavBar bookId={bookId.current} currentChapterId={currentChapter.current} chapterList={chapterList.current} setChapter={setCurrentChapter} />
        <h2>{chapterTitle.current}</h2>
        {paragraphs.map(paragraph => <p>{paragraph}</p>)}
        <ChapterNavBar bookId={bookId.current} currentChapterId={currentChapter.current} chapterList={chapterList.current} setChapter={setCurrentChapter} />
    </div>;
}