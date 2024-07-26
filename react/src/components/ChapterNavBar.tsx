import { useState } from "react";
import '../css/ChapterNavBar.css';

export interface ChapterNavBarProp {
    bookId: number,
    currentChapterId: number,
    chapterList: number[],
    setChapter: (chapterId: number) => void;
}

export default function ChapterNavBar(prop: ChapterNavBarProp) {
    const previousButton: JSX.Element = <button
        className="navBarButton"
        onClick={() => prop.setChapter(prop.currentChapterId - 1)}>
        Previous Chapter
    </button>;

    const nextbutton: JSX.Element = <button
        className="navBarButton"
        onClick={() => prop.setChapter(prop.currentChapterId + 1)}>
        Next Chapter
    </button>;

    const hasPreviousChapter = prop.chapterList.findIndex(chapter => chapter === prop.currentChapterId) > 0;
    const hasNextChapter = prop.chapterList.findIndex(chapter => chapter === prop.currentChapterId) < prop.chapterList.length - 1;

    return <div className="navBar">
        {hasPreviousChapter && previousButton}
        <ChapterDropDownMenu {...prop} />
        {hasNextChapter && nextbutton}
    </div>
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
        prop.setChapter(chapterId);
    }

    if (expanded) {
        const list = prop.chapterList.map(chapterId => {
            if (chapterId == prop.currentChapterId) {
                return <li key={chapterId}><button
                    className="dropDownButton activeDropDownButton"
                    onClick={CloseList}>
                    Chapter {chapterId}
                </button></li>;
            }

            return <li key={chapterId}><button
                className="dropDownButton activeDropDownButton"
                onClick={() => {
                    CloseList();
                    LoadNewChapter(chapterId)
                }}>
                Chapter {chapterId}
            </button></li>;
        });

        return <span className="dropDownContainer">
            <button
                className="dropDownButton inactiveDropDownButton"
                onClick={CloseList}>
                Chapter {prop.currentChapterId}
            </button>

            <ul className="dropDownMenu">
                {list}
            </ul>
        </span>
    }

    return <>
        <span className="dropDownContainer"><button onClick={ExpandList} className="dropDownButton inactiveDropDownButton">Chapter {prop.currentChapterId}</button></span>
    </>
}