package com.example.service;

public class MyService {
    public String hello() {
        return "Hello from ${{ values.component_id }}!";
    }
}