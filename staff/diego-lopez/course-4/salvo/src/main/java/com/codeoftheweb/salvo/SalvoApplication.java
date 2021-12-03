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
    public CommandLineRunner initData(PlayerRepository repository) {
        return args -> {
            // save a couple of customers
            repository.save(new Player("Jack Bauer"));
            repository.save(new Player("Chloe O'Brian"));
            repository.save(new Player("Kim Bauer"));
            repository.save(new Player("Tony Almeida"));
        };
    }
}
