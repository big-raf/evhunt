package com.marf.evhunt.web.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class FileParserController {

    @PostMapping("/parsecv")
    public  parseFile() {
        return repository.findAll().stream()
            .filter(this::isCool)
            .collect(Collectors.toList());
    }
}
