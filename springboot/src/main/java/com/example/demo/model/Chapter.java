package com.example.demo.model;

import com.example.demo.utils.JsonConverter;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonProcessingException;

public class Chapter {
    @JsonProperty("chapterId")
    private int chapterId;
    @JsonProperty("bookId")
    private int bookId;
    @JsonProperty("bookTitle")
    private String bookTitle;
    @JsonProperty("chapterTitle")
    private String chapterTitle;
    @JsonProperty("body")
    private String body;

    public Chapter(int chapterId, int bookId, String bookTitle, String chapterTitle, String body) {
        this.chapterId = chapterId;
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.chapterTitle = chapterTitle;
        this.body = body;
    }

    public String ToJson() {
        try {
            return JsonConverter.GetMapper().writeValueAsString(this);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}
