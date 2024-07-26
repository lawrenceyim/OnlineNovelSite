package com.example.demo.utils;

import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonConverter {
    private static final ObjectMapper objectMapper = new ObjectMapper();

    public static ObjectMapper GetMapper() {
        return objectMapper;
    }
}
