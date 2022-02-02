package com.codeoftheweb.salvo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.CommandLineRunner;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class SalvoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SalvoApplication.class, args);
	}

    @Bean
    public CommandLineRunner initData(
		PlayerRepository playerRepository,
		GameRepository gameRepository,
		GamePlayerRepository gamePlayerRepository,
		ShipRepository shipRepository) {
        return args -> {

			//placeholder players
			Player readyPlayer1 = new Player("Jack Bauer", "Jack@email.com");
			Player readyPlayer2 = new Player("Chloe O'Brian", "Chloe@email.com");
			Player readyPlayer3 = new Player("Kim Bauer", "Kim@email.com");

			playerRepository.save(readyPlayer1);
			playerRepository.save(readyPlayer2);
			playerRepository.save(readyPlayer3);
			
			//placeholder games
			Game g1 = new Game();
			Game g2 = new Game();
			Game g3 = new Game();

			//save game 
			gameRepository.save(g1);
			gameRepository.save(g2);
			gameRepository.save(g3);


			//placeholder gameplayers
            GamePlayer gp1 = new GamePlayer(g1, readyPlayer1);
            GamePlayer gp2 = new GamePlayer(g2, readyPlayer2);
            GamePlayer gp3 = new GamePlayer(g3, readyPlayer3);

			gamePlayerRepository.save(gp1);
			gamePlayerRepository.save(gp2);
			gamePlayerRepository.save(gp3);

			//placeholder ships
			List<String> location1 = Arrays.asList("H1", "H2");
			List<String> location2 = Arrays.asList("H1", "H2");
			List<String> location3 = Arrays.asList("H1", "H2");

			Ship ship1P1 = new Ship("friendship", gp1, location1);
			Ship ship2P1 = new Ship("relationship", gp1, location2);
			Ship ship1P2 = new Ship("shipping", gp2, location3);

			gp1.addShip(ship1P1);
			gp1.addShip(ship2P1);
			gp2.addShip(ship1P2);
			
			shipRepository.save(ship1P1);
			shipRepository.save(ship2P1);
			shipRepository.save(ship1P2);
        };
    }
}