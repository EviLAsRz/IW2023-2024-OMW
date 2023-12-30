package com.IWPhone.Models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.Collection;
import java.util.Collections;
import java.util.UUID;
@Entity
public class ApplicationUser implements UserDetails {

    @Id
    @GeneratedValue
    private UUID id;

    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return eliminationDate == null;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @NotEmpty
    private String username;//DNI

    private String name;
    private String surname;
    private String email;
    @NotEmpty
    private String password;

    private String role; // Add this field

    public LocalDate getEliminationDate() {
        return eliminationDate;
    }

    public void setEliminationDate(LocalDate eliminationDate) {
        this.eliminationDate = eliminationDate;
    }
// Existing getters and setters...

    private LocalDate eliminationDate = null;// Guardamos la fecha de eliminación de la cuenta

    public void setRole(String role) {
        this.role = role;
        //Save in authorities
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority(role);
        this.authorities = Collections.singletonList(authority);
    }

    public String getRole() {
        return role;
    }

    @ElementCollection(fetch = FetchType.EAGER)
    private Collection<GrantedAuthority> authorities;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public UUID getUserId() {
        return id;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
