package com.IWPhone;

import com.IWPhone.Models.ApplicationUser;
import com.IWPhone.Repositories.ApplicationUserRepo;
import com.IWPhone.Services.ApplicationUserService;
import com.IWPhone.security.SecurityService;
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
    public CommandLineRunner loadData(SecurityService securityService, ApplicationUserService applicationUserService, ApplicationUserRepo applicationUserRepo){

        return (args) -> {
            //Creamos un usuario admin si no existe, usando la repo
            if(applicationUserRepo.findByUsername("admin").isEmpty()){
                ApplicationUser admin = new ApplicationUser();
                admin.setUsername("admin");
                admin.setName("admin");
                admin.setSurname("admin");
                admin.setEmail("admin@admin.es");
                admin.setPassword(securityService.passwordEncoder().encode("admin"));
                admin.setRole("ADMIN");
                applicationUserRepo.save(admin);
            }

        };
    }

}
