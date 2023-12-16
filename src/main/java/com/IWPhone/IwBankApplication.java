package com.IWPhone;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
@EntityScan("com.IWPhone.*")//NO TOCAR EL CAMBIO DE ESCANEO DE ENTIDADES
public class IwBankApplication {


    public static void main(String[] args) {
        SpringApplication.run(IwBankApplication.class);
    }

    @Bean
    public CommandLineRunner loadData() {

        return (args) -> {

        };
    }

}
