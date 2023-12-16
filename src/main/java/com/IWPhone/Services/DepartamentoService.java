package com.IWPhone.Services;

import com.IWPhone.Models.Departamento;
import com.IWPhone.Repositories.DepartamentoRepo;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;


@Service
public class DepartamentoService {

    private DepartamentoRepo departamentoRepo;

    public DepartamentoService(DepartamentoRepo departamentoRepo) {
        this.departamentoRepo = departamentoRepo;
    }

    //Get departamenteo by nombre
    public Departamento getDepartamentoByNombre(String nombre){
        return departamentoRepo.findByNombre(nombre).orElseThrow(() -> new UsernameNotFoundException(nombre));
    }

    public void setNombre(String nombre, String newNombre){
        Departamento departamento = getDepartamentoByNombre(nombre);
        departamento.setNombre(newNombre);
        departamentoRepo.save(departamento);
    }

    public Departamento[] getAllDepartamentos(){
        List<Departamento> departamentos = new ArrayList<>();
        departamentos.addAll(departamentoRepo.findAll());
        return departamentos.toArray(new Departamento[0]);
    }

    public void addDepartamento(Departamento departamento){
        departamentoRepo.save(departamento);
    }


    public List<String> getNombresDepartamentos(){
        List<String> departamentos = new ArrayList<>();
        for(Departamento departamento : departamentoRepo.findAll()){
            departamentos.add(departamento.getNombre());
        }
        return departamentos;
    }

    public Optional<UUID> getUUIDByNombre(String nombre){
        return Optional.ofNullable(departamentoRepo.findByNombre(nombre).get().getId());
    }

}
