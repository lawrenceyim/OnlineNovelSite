package com.example.demo.rest;

import com.example.demo.App;
import com.example.demo.services.ChapterRepository;
import com.example.demo.utils.JsonConverter;
import org.springframework.web.bind.annotation.*;

@RestController
public class ChapterRestApi {
    @GetMapping("/content/{bookId}/{chapterId}")
    @CrossOrigin(origins = "*")
    public String GetChapter(@PathVariable int bookId, @PathVariable int chapterId) {
        return ChapterRepository.GetInstance().GetChapter(bookId, chapterId);
    }

    @GetMapping("/content/{bookId}")
    @CrossOrigin(origins = "*")
    public String GetBook(@PathVariable int bookId) {
        return ChapterRepository.GetInstance().GetBook(bookId);
    }
}
