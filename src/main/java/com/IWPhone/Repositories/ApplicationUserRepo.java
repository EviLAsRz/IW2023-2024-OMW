package com.IWPhone.Repositories;

import com.IWPhone.Models.ApplicationUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ApplicationUserRepo extends JpaRepository<ApplicationUser, String> {
    Optional<ApplicationUser> findByUsername(String username);
    Optional<ApplicationUser> findByEmail(String email);

    List<ApplicationUser> findAllByIdIsNotNull();
}
