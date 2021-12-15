package com.codeoftheweb.salvo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.CommandLineRunner;

@SpringBootApplication
public class SalvoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SalvoApplication.class, args);
	}

    @Bean
    public CommandLineRunner initData(PlayerRepository playerRepository, GameRepository gameRepository, GamePlayerRepository gamePlayerRepository) {
        return args -> {

			//placeholder players
			Player readyPlayer1 = new Player("Jack Bauer");
			playerRepository.save(readyPlayer1);
			Player readyPlayer2 = new Player("Chloe O'Brian");
			playerRepository.save(readyPlayer2);
			Player readyPlayer3 = new Player("Kim Bauer");
			playerRepository.save(readyPlayer3);
			
			//placeholder games
			Game g1 = new Game();
			gameRepository.save(g1);
			Game g2 = new Game();
			g2.setCreationDate(g2.getCreationDate().plusSeconds(3600));
			gameRepository.save(g2);
            Game g3 = new Game();
            g3.setCreationDate(g3.getCreationDate().plusSeconds(7200));
			gameRepository.save(g3);

			//placeholder gameplayers
            GamePlayer gp1 = new GamePlayer(g1, readyPlayer1);
			gamePlayerRepository.save(gp1);
            GamePlayer gp2 = new GamePlayer(g2, readyPlayer2);
			gamePlayerRepository.save(gp2);
            GamePlayer gp3 = new GamePlayer(g3, readyPlayer3);
			gamePlayerRepository.save(gp3);
        };
    }
}