package com.IWPhone.playground;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {
        @Autowired
        private final CustomerRepository repo;

        public CustomerService(CustomerRepository repo) {
            this.repo = repo;
        }

        public void save(Customer customer) {
            repo.save(customer);
        }

        public List<Customer> findAll() {
            return repo.findAll();
        }

        public void delete(Customer customer) {
            repo.delete(customer);
        }

        public Customer findById(Long id) {
            return repo.findById(id).get();
        }

        public List<Customer> findByFirstName(String name) {
            return repo.findByFirstNameStartsWithIgnoreCase(name);
        }

        public Iterable<Customer> findByLastNameStartsWithIgnoreCase(String lastName) {
            return repo.findByLastNameStartsWithIgnoreCase(lastName);
        }
}
