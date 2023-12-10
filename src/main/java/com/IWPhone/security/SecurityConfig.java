package com.IWPhone.security;

import com.IWPhone.Services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import com.IWPhone.login.views.LoginView;
import com.vaadin.flow.spring.security.VaadinWebSecurity;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

/*
@EnableWebSecurity
@Configuration
public class SecurityConfig extends VaadinWebSecurity {
    //private final JdbcUserDetailsManager JdbcUserDetailsManager;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(auth ->
                auth.requestMatchers(
                        AntPathRequestMatcher.antMatcher(HttpMethod.GET, "/images/*.png")).permitAll());
        super.configure(http);//NegusCode++
        setLoginView(http, LoginView.class);
    }

    @Bean
    public UserDetailsService users() {
        UserDetails user = User.builder()
                .username("user")
                // password = password with this hash, don't tell anybody :-)
                .password(SecurityService.passwordEncoder().encode("password"))
                .roles("USER")
                .build();
        UserDetails admin = User.builder()
                .username("admin")
                .password(SecurityService.passwordEncoder().encode("admin"))
                .roles("USER", "ADMIN")
                .build();
        UserDetails elpepeUser = User.builder()
                .username("elpepe")
                .password(SecurityService.passwordEncoder().encode("pepe"))
                .roles("USER")
                .build();

        return new InMemoryUserDetailsManager(user, admin, elpepeUser);
    }



}*/
@EnableWebSecurity
@Configuration
public class SecurityConfig extends VaadinWebSecurity {
    private final UserDetailsServiceImpl userDetailsService;

    public SecurityConfig(UserDetailsServiceImpl userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(auth ->
                auth.requestMatchers(
                        AntPathRequestMatcher.antMatcher(HttpMethod.GET, "/images/*.png")).permitAll());
        super.configure(http);
        setLoginView(http, LoginView.class);
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }
}

