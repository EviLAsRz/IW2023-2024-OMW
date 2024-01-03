package com.IWPhone.Repositories;
import com.IWPhone.Models.Consult;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ConsultRepo extends JpaRepository<Consult, Long> {
    Consult findById(UUID id);
    List<Consult> getAllByClienteId(UUID id);

}
