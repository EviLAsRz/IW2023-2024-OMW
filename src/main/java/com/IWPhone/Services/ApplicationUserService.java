package com.IWPhone.Services;

import com.IWPhone.Models.ApplicationUser;
import com.IWPhone.Repositories.ApplicationUserRepo;
import com.IWPhone.security.SecurityService;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class ApplicationUserService {
    private final ApplicationUserRepo appUserRepo;

    public ApplicationUserService(ApplicationUserRepo appUserRepo) {
        this.appUserRepo = appUserRepo;
    }

    //Setter and getter de los usuarios de la aplicación

    public Optional<ApplicationUser> getApplicationUser(String username){
        return appUserRepo.findByUsername(username);
    }

    public String getName(String username){
        return getApplicationUser(username).get().getName();
    }

    public String getSurname(String username){
        return getApplicationUser(username).get().getSurname();
    }

    public void setUsername(String username, String newUsername){
        ApplicationUser appUser = getApplicationUser(username).get();
        appUser.setUsername(newUsername);
        appUserRepo.save(appUser);
    }

    public void setPassword(String username, String newPassword){
        ApplicationUser appUser = getApplicationUser(username).get();
        appUser.setPassword(SecurityService.passwordEncoder().encode(newPassword));
        appUserRepo.save(appUser);
    }

    public String getMail(String username){
        return getApplicationUser(username).get().getEmail();
    }

    public void setMail(String username, String newMail){
        ApplicationUser appUser = getApplicationUser(username).get();
        appUser.setEmail(newMail);
        appUserRepo.save(appUser);
    }

    public String getRole(String username){
        return getApplicationUser(username).get().getRole();
    }

    public void setRole(String username, String newRole){
        ApplicationUser appUser = getApplicationUser(username).get();
        appUser.setRole(newRole);
        appUserRepo.save(appUser);
    }



    public void setName(String username, String newName){
        ApplicationUser appUser = getApplicationUser(username).get();
        appUser.setName(newName);
        appUserRepo.save(appUser);
    }

    public void setSurname(String username, String newSurname){
        ApplicationUser appUser = getApplicationUser(username).get();
        appUser.setSurname(newSurname);
        appUserRepo.save(appUser);
    }



}
