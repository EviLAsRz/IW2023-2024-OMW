package com.IWPhone.Repositories;

import com.IWPhone.Models.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ClientRepo extends JpaRepository<Client, UUID> {
    Client findBy_sDNI(String dni);
}
