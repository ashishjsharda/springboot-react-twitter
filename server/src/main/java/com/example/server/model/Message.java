package com.example.server.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Message {

    @Id @GeneratedValue
    private Long id;
    private String content;


}

