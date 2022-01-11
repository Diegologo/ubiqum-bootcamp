package com.codeoftheweb.salvo;

import javax.persistence.Entity;
import org.hibernate.annotations.GenericGenerator;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.Instant;

@Entity
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private long id;
    private Instant creationDate;
  
    //Constructor
    public Game() {
        this.creationDate = Instant.now();
    }

    public Game(Instant dateGame){
        creationDate = dateGame;
    }

    //Getters y Setters
    public Instant getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Instant creationDate) {
        this.creationDate = creationDate;
    }

    public long getId(){
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}