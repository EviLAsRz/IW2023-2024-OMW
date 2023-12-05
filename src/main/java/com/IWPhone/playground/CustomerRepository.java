package com.IWPhone.playground;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    List<Customer> findByLastNameStartsWithIgnoreCase(String lastName);
    List<Customer> findByFirstNameStartsWithIgnoreCase(String firstName);

    //spring Data JPA-Reference Documentation para ver más métodos de consulta

}
