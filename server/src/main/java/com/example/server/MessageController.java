package com.example.server;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    private MessageRepository repository;

    public MessageController(MessageRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Message> getAllMessages() {
        return repository.findAll();
    }

    @PostMapping
    public Message createMessage(@RequestBody Message message) {
        return repository.save(message);
    }
}
