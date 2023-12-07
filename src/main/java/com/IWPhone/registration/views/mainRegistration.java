package com.IWPhone.registration.views;

import com.IWPhone.Models.ApplicationUser;
import com.IWPhone.Repositories.ApplicationUserRepository;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.button.Button;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Route("register")
@AnonymousAllowed
public class mainRegistration extends VerticalLayout {
    private final ApplicationUserRepository userRepository;

    public mainRegistration(ApplicationUserRepository userRepository){
        this.userRepository = userRepository;
        TextField username = new TextField("Username");
        PasswordField password = new PasswordField("Password");
        Button register = new Button("Register");
        register.addClickListener(e -> {
            String dniValue = username.getValue();

            Notification.show("DNI: " + dniValue);

            ApplicationUser user = new ApplicationUser();
            user.setUsername(username.getValue());
            user.setPassword(SecurityService.passwordEncoder().encode(password.getValue()));
            //user.setRoles("USER");
            userRepository.save(user);
        });
        add(username, password, register);
    }
}
