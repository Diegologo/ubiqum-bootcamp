package com.codeoftheweb.salvo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedCaseInsensitiveMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.http.HttpStatus;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.LinkedHashMap;
import java.util.Set;
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

    @RequestMapping(path="/game_view/{gamePlayerId}")
    public ResponseEntity<Object>getGameView(@PathVariable Long gamePlayerId) {
    GamePlayer gamePlayer = gamePlayerRepository.findById(gamePlayerId).orElse(null);
       
        if(gamePlayer==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Game game = gamePlayer.getGame();
      
        Set<GamePlayer> gamePlayerSet = game.getGamePlayers();
        Map<String,Object> dto = new LinkedHashMap<>();
        dto.put("gameplayer_Id",gamePlayer.getGamePlayerId());
        dto.put("created",game.getCreationDate());
        dto.put("game_id",game.getGameId());
        dto.put("gamePlayers", gamePlayerSet.stream()
                                            .map( gp -> makeGamePlayerDTO(gp))
                                            .collect(toList()));
        dto.put("ships",gamePlayer.getShips().stream()
                                          .map(s-> makeShipDTO(s))
                                          .collect(toList()));

        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @RequestMapping("/ships")
    public List<Ship> getShips() {
        return shipRepository.findAll();
    }

    public Map<String,Object> makePlayerDTO(Player player){
        Map<String,Object> playerDTO = new HashMap<>();
        playerDTO.put("id", player.getPlayerId());
        playerDTO.put("email", player.getEmail());
        return playerDTO;
    }

    public Map<String,Object> makeGamePlayerDTO(GamePlayer gamePlayer){
        Map<String,Object> gamePlayerDTO = new HashMap<>();
        gamePlayerDTO.put("id",gamePlayer.getGamePlayerId());
        gamePlayerDTO.put("player",makePlayerDTO(gamePlayer.getPlayer()));
        return gamePlayerDTO;
    }

    public Map<String,Object> makeShipDTO(Ship ship){
        Map<String,Object> dto = new LinkedCaseInsensitiveMap<>();
        dto.put("type", ship.getType());
        dto.put("location",ship.getShipLocation());
        return dto;
    }
}