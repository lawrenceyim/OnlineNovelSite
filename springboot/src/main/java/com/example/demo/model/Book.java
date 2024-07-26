package com.example.demo.model;

import com.example.demo.utils.JsonConverter;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonProcessingException;

import java.util.List;

public class Book {
    @JsonProperty("bookId")
    private int bookId;
    @JsonProperty("bookTitle")
    private String bookTitle;
    @JsonProperty("authors")
    private List<String> authors;
    @JsonProperty("chapterList")
    private List<Integer> chapterList;

    public Book(int bookId, String bookTitle, List<String> authors, List<Integer> chapterList) {
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.authors = authors;
        this.chapterList = chapterList;
    }

    public int getBookId() {
        return bookId;
    }

    public String getBookTitle() {
        return bookTitle;
    }

    public List<String> getAuthors() {
        return authors;
    }

    public List<Integer> getChapterList() {
        return chapterList;
    }

    public String ToJson() {
        try {
            return JsonConverter.GetMapper().writeValueAsString(this);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}
