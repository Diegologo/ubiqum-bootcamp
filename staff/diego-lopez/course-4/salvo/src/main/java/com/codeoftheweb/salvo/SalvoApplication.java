package com.codeoftheweb.salvo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.CommandLineRunner;
import java.util.Date;

@SpringBootApplication
public class SalvoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SalvoApplication.class, args);
	}
    @Bean
    public CommandLineRunner initData(GameRepository gameRepository) {
        return args -> {

			Date date1 = new Date();
			date1 = Date.from(date1.toInstant());
			gameRepository.save(new Game(date1));

            Date date2 = new Date();
			date2 = Date.from(date2.toInstant().plusSeconds(3600));
			gameRepository.save(new Game(date2));

            Date date3 = new Date();
			date3 = Date.from(date3.toInstant().plusSeconds(7200));
			gameRepository.save(new Game(date3));
        };
    }
}