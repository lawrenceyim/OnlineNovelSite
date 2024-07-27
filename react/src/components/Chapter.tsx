import { useEffect, useState } from "react";
import ChapterNavBar from "./ChapterNavBar";
import '../css/Chapter.css';

export interface ChapterProp {
  chapterId: number;
  bookId: number;
}

interface ChapterResponse {
  chapterId: number;
  bookId: number;
  bookTitle: string;
  chapterTitle: string;
  body: string;
}

interface BookResponse {
  bookId: number;
  bookTitle: string;
  authors: string[];
  chapterList: number[];
}

export default function Chapter(prop: ChapterProp) {
  const [chapterResponse, setChapterResponse] = useState<ChapterResponse | null>(null);
  const [bookResponse, setBookResponse] = useState<BookResponse | null>(null);
  const ipAddress = "http://localhost:";
  const portNumber = "8080";

  useEffect(() => {
    setChapterResponse(null);
    const fetchChapterData = async () => {
      try {
        const response = await fetch(`${ipAddress}${portNumber}/content/${prop.bookId}/${prop.chapterId}`);
        const data: ChapterResponse = await response.json();
        setChapterResponse(data);
      } catch (error) {
        console.error("Error fetching chapter data:", error);
      }
    };

    fetchChapterData();
  }, [prop.bookId, prop.chapterId]);

  useEffect(() => {
    setBookResponse(null);
    const fetchBookData = async () => {
      try {
        const response = await fetch(`${ipAddress}${portNumber}/content/${prop.bookId}`);
        const data: BookResponse = await response.json();
        setBookResponse(data);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchBookData();
  }, [prop.bookId]);

  if (!chapterResponse || !bookResponse) {
    return <div>Loading...</div>;
  }

  const paragraphs: string[] = chapterResponse.body.split("\n");

  return (
    <div className="chapterPage">
      <h1>{bookResponse.bookTitle}</h1>
      <ChapterNavBar
        bookId={bookResponse.bookId}
        currentChapterId={chapterResponse.chapterId}
        chapterList={bookResponse.chapterList}
        setChapter={(chapterId: number) => setChapterResponse({ ...chapterResponse, chapterId })}
      />
      <h2>{chapterResponse.chapterId}</h2>
      {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      <ChapterNavBar
        bookId={bookResponse.bookId}
        currentChapterId={chapterResponse.chapterId}
        chapterList={bookResponse.chapterList}
        setChapter={(chapterId: number) => setChapterResponse({ ...chapterResponse, chapterId })}
      />
    </div>
  );
}
