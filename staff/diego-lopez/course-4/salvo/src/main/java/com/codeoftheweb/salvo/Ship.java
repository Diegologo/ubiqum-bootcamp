package com.codeoftheweb.salvo;

import javax.persistence.*;
import org.hibernate.annotations.GenericGenerator;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Ship {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private long id;
    private String shipType;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="gamePlayer_id")
    private GamePlayer gamePlayer;

    @ElementCollection
    @Column(name="shipLocation")
    List<String> shipLocation = new ArrayList<>();

    public Ship(){}

    public Ship(String shipType, GamePlayer gamePlayer, List <String> shipLocation) {
        this.shipType = shipType;
        this.setGamePlayer(gamePlayer);
        this.shipLocation = shipLocation;
    }

    public Long getShipId(){
        return id;
    }

    public String getType(){
        return shipType;
    }

    public void setType(String shipType){
        this.shipType = shipType;
    }

    public GamePlayer getGamePlayer() {
        return gamePlayer;
    }

    public void setGamePlayer(GamePlayer gamePlayer) {
        this.gamePlayer = gamePlayer;
    }
    
    public List<String> getShipLocation() {
        return shipLocation;
    }

    public void setShipLocation(List<String> shipLocation) {
        this.shipLocation = shipLocation;
    }
}