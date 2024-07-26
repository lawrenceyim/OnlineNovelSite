package com.example.demo.services;

import com.example.demo.model.Book;
import com.example.demo.model.Chapter;
import com.example.demo.utils.FakeBooksAndChapters;
import com.example.demo.utils.JsonConverter;
import com.fasterxml.jackson.core.JsonProcessingException;

import java.util.HashMap;
import java.util.Optional;

public class ChapterRepository {
    public static ChapterRepository instance;
    private HashMap<Integer, Book> books = new HashMap<>();
    private HashMap<Book, HashMap<Integer, Chapter>> chapters = new HashMap<>();

    private ChapterRepository() {
        FakeBooksAndChapters.InitializeBooksAndChapters(books, chapters);
    }

    public static ChapterRepository GetInstance() {
        if (instance == null) {
            instance = new ChapterRepository();
        }
        return instance;
    }

    public String GetChapter(int bookId, int chapterId) {
        Optional<Book> book = Optional.ofNullable(books.get(bookId));
        Optional<HashMap<Integer, Chapter>> chapterList = book.map(b -> chapters.get(b));
        Optional<Chapter> chapter = chapterList.map(cl -> cl.get(chapterId));
        if (chapter.isPresent()) {
            try {
                return JsonConverter.GetMapper().writeValueAsString(chapter.get());
            } catch (JsonProcessingException e) {
                throw new RuntimeException(e);
            }
        }
        return """
                    {
                        "error": "No chapter found."
                    }
                """;
    }

    public String GetBook(int bookId) {
        Optional<Book> book = Optional.of(books.get(bookId));
        if (book.isPresent()) {
            try {
                return JsonConverter.GetMapper().writeValueAsString(book.get());
            } catch (JsonProcessingException e) {
                throw new RuntimeException();
            }
        }
        return """
                    {
                        "error": "No book found."
                    }
                """;
    }
}
