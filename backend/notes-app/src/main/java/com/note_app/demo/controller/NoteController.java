/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.note_app.demo.controller;

import com.note_app.demo.ex.ResourceNotFoundException;
import com.note_app.demo.model.Note;
import com.note_app.demo.repo.NoteRepo;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



/**
 *
 * @author Juan Cruz
 */
@CrossOrigin (origins = "http://localhost:3000/") // 
@RestController
@RequestMapping("/api/notes/")
public class NoteController {   
    
    @Autowired
    private NoteRepo noteRepo;
    
    @GetMapping ("/") 
    public List<Note> getNotes(){
    
        return noteRepo.findAll();
    }
    @PostMapping("/") 
    public Note createNote(@RequestBody Note note ){
        return noteRepo.save(note); 
    }
    
    
    @GetMapping (value= "/", params = "id") // 
    public ResponseEntity<Note> getNoteById(@RequestBody Integer id){
    
        Note usuario = noteRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("No existe "+ id));
        return ResponseEntity.ok(usuario); 
    
    }
    
    @PutMapping("/")
    public ResponseEntity<Note> updateNote (@RequestBody Integer id, @RequestBody Note noteIn){
        
        Note noteBuff = noteRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("No existe "+ id));
        
        noteBuff.setContent(noteIn.getContent());
        noteBuff.setTitle(noteIn.getTitle());
        noteBuff.setDate(noteIn.getDate());
        noteBuff.setIsArchived(noteIn.getIsArchived());
     
        
        return (ResponseEntity.ok(noteRepo.save(noteBuff)));
        
    }
    
    
    @DeleteMapping("/")
    public ResponseEntity<Map<String,Boolean>> deleteUser (@PathVariable Integer id ){
    
        Note noteBuff = noteRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("No existe "+ id));
        
        noteRepo.delete(noteBuff);
        Map<String,Boolean> res = new HashMap<>();
        res.put("Borrado - Deleted ", Boolean.TRUE);
        return ResponseEntity.ok(res);
        
    }
    
}