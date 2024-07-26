import { useState } from "react"

export interface ChapterNavBarProp {
    bookId: number,
    currentChapterId: number,
    chapterList: number[]
}

export default function ChapterNavBar(prop: ChapterNavBarProp) {
    return <>
        <button>Previous Chapter</button>
        <ChapterDropDownMenu {...prop} />
        <button>Next Chapter</button>
    </>
}

function ChapterDropDownMenu(prop: ChapterNavBarProp) {
    const [expanded, setExpanded] = useState(false);

    function ExpandList() {
        setExpanded(true);
    }

    function CloseList() {
        setExpanded(false);
    }

    function LoadNewChapter(chapterId: number) {
        console.log(chapterId + "PRESSED");
        // TODO
    }

    if (expanded) {
        const list = prop.chapterList.map(chapterId => {
            if (chapterId == prop.currentChapterId) {
                return <button onClick={CloseList} key={chapterId}>Chapter {chapterId}</button>;
            }
            return <button onClick={() => LoadNewChapter(chapterId)} key={chapterId}>Chapter {chapterId}</button>;
        });

        return <ul>
            {list}
        </ul>
    }

    return <>
        <button onClick={ExpandList} >Chapter {prop.currentChapterId}</button>
    </>
}