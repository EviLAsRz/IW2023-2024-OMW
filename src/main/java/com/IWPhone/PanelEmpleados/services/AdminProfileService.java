package com.IWPhone.PanelEmpleados.services;

import com.IWPhone.Models.ApplicationUser;
import com.IWPhone.Services.ApplicationUserService;
import com.IWPhone.security.SecurityService;
import com.vaadin.open.App;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminProfileService {
    final ApplicationUserService applicationUserService;
    final EmployeeProfileService employeeProfileService;

    public AdminProfileService(ApplicationUserService applicationUserService, EmployeeProfileService employeeProfileService) {
        this.applicationUserService = applicationUserService;
        this.employeeProfileService = employeeProfileService;
    }

    public Optional<ApplicationUser> getAdminData(String dni){
        return applicationUserService.getApplicationUser(dni);
    }

    public void updateAdminData(String dni,String newDni, String name, String surname, String mail){
        Optional<ApplicationUser> user = applicationUserService.getApplicationUser(dni);
        if(user.isPresent()){
            user.get().setUsername(newDni);
            user.get().setName(name);
            user.get().setSurname(surname);
            user.get().setEmail(mail);
            applicationUserService.updateApplicationUser(user.get());
        }
    }

    public void updateAdminPassword(String dni, String newPassword){
        Optional<ApplicationUser> user = applicationUserService.getApplicationUser(dni);
        if(user.isPresent()){
            user.get().setPassword(SecurityService.passwordEncoder().encode(newPassword));
            applicationUserService.updateApplicationUser(user.get());
        }
    }

}
