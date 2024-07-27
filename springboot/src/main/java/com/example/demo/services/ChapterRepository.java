package com.example.demo.services;

import com.example.demo.model.Book;
import com.example.demo.model.Chapter;
import com.example.demo.utils.FakeBooksAndChapters;
import com.example.demo.utils.JsonConverter;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

public class ChapterRepository {
    public static ChapterRepository instance;
    private final HashMap<Integer, Book> books = new HashMap<>();
    private final HashMap<Book, HashMap<Integer, Chapter>> chapters = new HashMap<>();

    private ChapterRepository() {
        FakeBooksAndChapters.InitializeBooksAndChapters(books, chapters);
    }

    public static ChapterRepository GetInstance() {
        if (instance == null) {
            instance = new ChapterRepository();
        }
        return instance;
    }

    public ResponseEntity<String> GetChapter(int bookId, int chapterId) {
        Optional<Book> book = Optional.ofNullable(books.get(bookId));
        Optional<HashMap<Integer, Chapter>> chapterList = book.map(b -> chapters.get(b));
        Optional<Chapter> chapter = chapterList.map(cl -> cl.get(chapterId));
        if (chapter.isPresent()) {
            try {
                return ResponseEntity.ok().body(JsonConverter.GetMapper().writeValueAsString(chapter.get()));
            } catch (JsonProcessingException e) {
                return ResponseEntity.internalServerError().body("Server error.");
            }
        }
        return ResponseEntity.badRequest().body("Chapter not found.");
    }

    public ResponseEntity<String> GetBook(int bookId) {
        Optional<Book> book = Optional.of(books.get(bookId));
        try {
            return ResponseEntity.ok().body(JsonConverter.GetMapper().writeValueAsString(book.get()));
        } catch (JsonProcessingException e) {
            return ResponseEntity.internalServerError().body("Server error.");
        }
    }

    public ResponseEntity<String> GetBooks() {
        List<Book> bookList = books.values().stream().toList();
        try {
            return ResponseEntity.ok().body(JsonConverter.GetMapper().writeValueAsString(bookList));
        } catch (JsonProcessingException e) {
            return ResponseEntity.internalServerError().body("Server error.");
        }
    }
}
