package com.IWPhone.Services;

import com.IWPhone.Models.ApplicationUser;
import com.IWPhone.Repositories.ApplicationUserRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class UserDetailsServiceImpl implements UserDetailsService {
    private ApplicationUserRepository userRepository;

    public UserDetailsServiceImpl(ApplicationUserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String dni) throws UsernameNotFoundException {
        ApplicationUser applicationUser = userRepository.findByDni(dni);
        if(applicationUser == null) {
            throw new UsernameNotFoundException(dni);
        }
        return User.withUsername(applicationUser.getDni())
                .password(applicationUser.getPassword())
                //.roles(applicationUser.getRoles())
                .build();
    }
}