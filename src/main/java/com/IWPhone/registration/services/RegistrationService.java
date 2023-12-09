package com.IWPhone.registration.services;

import org.springframework.stereotype.Service;

@Service
public class RegistrationService {
    //Check if the user is already registered
    public boolean isApplicationUserRegistered(String username){
        return false;
    }

    //Check if the Contract does not exist
    public boolean isContractRegistered(String contract){
        return false;
    }

    //Check if the client is already registered
    public boolean isClientRegistered(String dni){
        return false;
    }

}
