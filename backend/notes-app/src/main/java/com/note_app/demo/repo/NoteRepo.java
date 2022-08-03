/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.note_app.demo.repo;

import com.note_app.demo.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Juan Cruz
 */
public interface NoteRepo extends JpaRepository<Note, Integer>{
    
}
