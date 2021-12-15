package com.codeoftheweb.salvo;

import javax.persistence.*;
import org.hibernate.annotations.GenericGenerator;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.Instant;

@Entity
public class GamePlayer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long id;

    private Instant creationDate;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="game_id")
    private Game gameP;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="player_id")
    private Player playerP;


    //constructor

    public  GamePlayer(){}

    public GamePlayer(Game game, Player player) {
        this.gameP = game;
        this.playerP = player;
        this.creationDate = Instant.now();
    }


    //getters & setters

    public Game getGame() {
        return gameP;
    }

    public void setGame(Game game) {
        this.gameP = game;
    }

    public Player getPlayer() {
        return playerP;
    }

    public void setPlayer(Player player) {
        this.playerP = player;
    }

    public Instant getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Instant creationDate) {
        this.creationDate = creationDate;
    }
}
