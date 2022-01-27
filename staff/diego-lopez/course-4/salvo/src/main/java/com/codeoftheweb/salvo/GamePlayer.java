package com.codeoftheweb.salvo;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
public class GamePlayer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="game_id")
    private Game game;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="player_id")
    private Player player;

    @OneToMany(mappedBy = "gamePlayer" , fetch = FetchType.EAGER)
     Set<Ship> ships = new LinkedHashSet<>();


    //constructor

    public  GamePlayer(){}

    public GamePlayer(Game game, Player player) {
        this.setGame(game);
        this.setPlayer(player);
    }


    //getters & setters

    public long getGamePlayerId(){
        return id;
    } 

    @JsonIgnore
    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }
    
    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    @JsonIgnore
    public Set<Ship> getShips() {
        return ships;
    }

    public void setShips(Set<Ship> ships) {
        this.ships = ships;

    }

    public void addShip(Ship ship){
        ship.setGamePlayer(this);
        this.ships.add(ship);
    }
}
