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
public class SalvoController {

    @Autowired
    private GameRepository gameRepository;

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

    @Autowired
    private PlayerRepository playerRepository;

    @RequestMapping("/players")
    public List<Player> getPlayers() {
        return playerRepository.findAll();
    }

    @Autowired
    private GamePlayerRepository gamePlayerRepository;

    @RequestMapping("/gameplayers")
    public List<GamePlayer> getGameplayers() {
        return gamePlayerRepository.findAll();
    }

    @Autowired
    private ShipRepository shipRepository;

    @RequestMapping("/ships")
    public List<Ship> getShips() {
        return shipRepository.findAll();
    }
}