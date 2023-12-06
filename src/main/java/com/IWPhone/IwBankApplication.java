package com.IWPhone;

import com.IWPhone.playground.Customer;
import com.IWPhone.playground.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EntityScan("com.IWPhone.playground")
public class IwBankApplication {


    public static void main(String[] args) {
        SpringApplication.run(IwBankApplication.class);
    }

    @Bean
    public CommandLineRunner loadData(CustomerRepository repository) {

        return (args) -> {
            // save a couple of customers
            /*repository.save(new Customer("Jack", "Bauer"));
            repository.save(new Customer("Chloe", "O'Brian"));
            repository.save(new Customer("Kim", "Bauer"));
            repository.save(new Customer("David", "Palmer"));
            repository.save(new Customer("Michelle", "Dessler"));*/

            // fetch all customers
            /*log.info("Customers found with findAll():");
            log.info("-------------------------------");
            for (Customer customer : repository.findAll()) {
                log.info(customer.toString());
            }
            log.info("");
        /*
            // fetch an individual customer by ID
            Customer customer = repository.findById(1L).get();*/
            /*log.info("Customer found with findOne(1L):");
            log.info("--------------------------------");
            log.info(customer.toString());
            log.info("");

            // fetch customers by last name
            log.info("Customer found with findByLastNameStartsWithIgnoreCase('Bauer'):");
            log.info("--------------------------------------------");
            for (Customer bauer : repository
                    .findByLastNameStartsWithIgnoreCase("Bauer")) {
                log.info(bauer.toString());
            }
            log.info("");

             */
        };
    }

}
