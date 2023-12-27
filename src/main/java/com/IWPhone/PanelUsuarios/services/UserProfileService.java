package com.IWPhone.PanelUsuarios.services;

import com.IWPhone.Services.ApplicationUserService;
import com.IWPhone.security.SecurityService;
import org.springframework.stereotype.Service;

@Service
public class UserProfileService {
    final ApplicationUserService applicationUserService;
    final SecurityService securityService;
    UserProfileService(ApplicationUserService applicationUserService, SecurityService securityService){
        this.applicationUserService = applicationUserService;
        this.securityService = securityService;
    }





}
