package com.codeoftheweb.salvo;

import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.hibernate.annotations.GenericGenerator;
import javax.persistence.*;
import java.time.Instant;
import java.util.Set;
import java.util.List;
import java.util.Date;


import static java.util.stream.Collectors.toList;


import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@EntityListeners(AuditingEntityListener.class)

public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private long id;
    private Date creationDate;
    @OneToMany(mappedBy = "game", fetch = FetchType.EAGER)
    Set<GamePlayer> gamePlayers;

    //Constructor
    public Game() {
        this.creationDate = Date.from(Instant.now());
    }

    public long getGameId(){
        return id;
    } 

    public void setGameId(long id) {
        this.id = id;
    }

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

    public Set<GamePlayer> getGamePlayers() {
        return gamePlayers;
    }

    public void setGamePlayers(Set<GamePlayer> gamePlayers) {
        this.gamePlayers = gamePlayers;
    }

    //what this does?
    public void addGamePlayer(GamePlayer gamePlayer) {
        gamePlayer.setGame(this);
        gamePlayers.add(gamePlayer);
    } 

    @JsonIgnore
    public List<Player> getPlayers() {
        return gamePlayers.stream()
        .map(GamePlayer::getPlayer)
        .collect(toList());
    }
}