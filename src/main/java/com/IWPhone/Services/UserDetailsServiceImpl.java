package com.IWPhone.Services;

import com.IWPhone.Models.ApplicationUser;
import com.IWPhone.Repositories.ApplicationUserRepo;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    private ApplicationUserRepo userRepository;

    public UserDetailsServiceImpl(ApplicationUserRepo userRepository){
        this.userRepository = userRepository;
    }

    /*@Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        ApplicationUser applicationUser = userRepository.findById(username).orElseThrow(() -> new UsernameNotFoundException(username));
        return User.withUsername(applicationUser.getUsername())
                .password(applicationUser.getPassword())
                //.roles(applicationUser.getRoles())
                .build();
    }*/
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //Pillo el usuario de mi base de datos
        ApplicationUser applicationUser = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException(username));
        //Llamalo X la clase base de datos
        //Lo inserto en UserDetails
        return User.withUsername(applicationUser.getUsername())
                .password(applicationUser.getPassword())
                .roles(applicationUser.getRole())
                .build();
    }



}