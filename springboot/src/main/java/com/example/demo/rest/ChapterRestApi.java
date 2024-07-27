package com.example.demo.rest;

import com.example.demo.services.ChapterRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChapterRestApi {
    @GetMapping("/content/{bookId}/{chapterId}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<String> GetChapter(@PathVariable int bookId, @PathVariable int chapterId) {
        return ChapterRepository.GetInstance().GetChapter(bookId, chapterId);
    }

    @GetMapping("/content/{bookId}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<String> GetBook(@PathVariable int bookId) {
        return ChapterRepository.GetInstance().GetBook(bookId);
    }

    @GetMapping("/content/books")
    @CrossOrigin(origins = "*")
    public ResponseEntity<String> GetBooks() {
        return ChapterRepository.GetInstance().GetBooks();
    }
}
