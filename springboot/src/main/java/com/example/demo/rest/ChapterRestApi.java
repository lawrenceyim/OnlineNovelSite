package com.example.demo.rest;

import com.example.demo.App;
import com.example.demo.utils.JsonConverter;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChapterRestApi {

    @GetMapping("/getChapter")
    @CrossOrigin(origins = "*")
    public String GetChapter() {
        return "test chapter";
    }

    @GetMapping("/getBook")
    @CrossOrigin(origins = "*")
    public String GetBook() {
        return "test book";
    }
}
