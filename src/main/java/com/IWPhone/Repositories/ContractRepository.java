package com.IWPhone.Repositories;

import com.IWPhone.Models.Contract;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContractRepository extends JpaRepository<Contract, Long> {
    Contract findBy_sClient(String dniCliente);
}
