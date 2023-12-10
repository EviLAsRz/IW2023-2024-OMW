package com.IWPhone.Services;

import com.IWPhone.Models.Departamento;
import com.IWPhone.Repositories.DepartamentoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class DepartamentoService {
    @Autowired
    private DepartamentoRepo departamentoRepo;

    //Get departamenteo by nombre
    public Departamento getDepartamentoByNombre(String nombre){
        return departamentoRepo.findByNombre(nombre).orElseThrow(() -> new UsernameNotFoundException(nombre));
    }

    public void setNombre(String nombre, String newNombre){
        Departamento departamento = getDepartamentoByNombre(nombre);
        departamento.setNombre(newNombre);
        departamentoRepo.save(departamento);
    }


}
