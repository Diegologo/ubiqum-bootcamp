package com.codeoftheweb.salvo;

import javax.persistence.Entity;
import org.hibernate.annotations.GenericGenerator;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private long id;
    private Date creationDate;
  
    //Constructores
    public Game(){}

    public Game(Date dateGame){
        creationDate = dateGame;
    }

    //Getters y Setters
    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }
}