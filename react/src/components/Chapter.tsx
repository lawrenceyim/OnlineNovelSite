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
    return <>
        <h1>{prop.bookTitle}</h1>
        <ChapterNavBar bookId={prop.bookId} currentChapterId={prop.chapterId} chapterList={prop.chapterList}/>
        <h2>{prop.bookTitle}</h2>
        <p>{prop.body}</p>
        <ChapterNavBar bookId={prop.bookId} currentChapterId={prop.chapterId} chapterList={prop.chapterList}/>
    </>
}