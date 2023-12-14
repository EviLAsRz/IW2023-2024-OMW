package com.IWPhone;

import com.IWPhone.Models.ApplicationUser;
import com.IWPhone.Repositories.ApplicationUserRepository;
import com.IWPhone.playground.Customer;
import com.IWPhone.playground.CustomerRepository;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.theme.Theme;
import com.vaadin.flow.theme.lumo.Lumo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;


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
