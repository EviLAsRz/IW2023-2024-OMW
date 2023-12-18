package com.IWPhone.Repositories;

import com.IWPhone.Models.Contract;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContractRepository extends JpaRepository<Contract, Long> {
    Contract findBy_sClient(String dniCliente);
    List<Contract>  findBy_tStartDateIsNull();//Fetch all contracts that have not started yet
    List<Contract> findBy_tStartDateIsNotNull();//Fetch all contracts that have started

}
