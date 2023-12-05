package com.IWPhone.Models;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class UserModel implements UserDetails {
    private String username;
    private String password;
    private String customField;

    public UserModel(String username, String password, String customField) {
        this.username = username;
        this.password = password;
        this.customField = customField;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // Implement this method to return the authorities (roles) of the user
        return null;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public String getCustomField() {
        return customField;
    }
}

