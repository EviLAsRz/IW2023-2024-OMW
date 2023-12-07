package com.IWPhone.Repositories;

import com.IWPhone.Models.ApplicationUser;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ApplicationUserRepository extends JpaRepository<ApplicationUser, String> {
    ApplicationUser findByDni(String dni);
}
