package com.codeoftheweb.salvo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import static java.util.stream.Collectors.toList;


@RestController
@RequestMapping("/api")
public class SalvoController  {

    @Autowired
    private GameRepository gameRepository;
    @Autowired
    private PlayerRepository playerRepository;
    @Autowired
    private GamePlayerRepository gamePlayerRepository;
    @Autowired
    private ShipRepository shipRepository;

    @RequestMapping("/games")
    public List<Map<String, Object>> getGames() {
        return gameRepository.findAll().stream().map(game -> {
            Map<String, Object> gameMap = new HashMap<>();

            gameMap.put("creationDate", game.getCreationDate());
            gameMap.put("gameId", game.getGameId());
            gameMap.put("gameplayers", game.getPlayers());

            return gameMap;
        }).collect(toList());
    }

    @RequestMapping("/players")
    public List<Player> getPlayers() {
        return playerRepository.findAll();
    }

    @RequestMapping("/gameplayers")
    public List<GamePlayer> getGameplayers() {
        return gamePlayerRepository.findAll();
    }

    @RequestMapping("/ships")
    public List<Ship> getShips() {
        return shipRepository.findAll();
    }
}