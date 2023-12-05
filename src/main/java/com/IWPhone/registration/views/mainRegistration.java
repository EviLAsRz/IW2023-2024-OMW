package com.IWPhone.registration.views;
import com.IWPhone.security.SecurityService;
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
    private final UserDetailsService userDetailsService;

    public mainRegistration(UserDetailsService userDetailsService){
        this.userDetailsService = userDetailsService;
        TextField username = new TextField("Username");
        PasswordField password = new PasswordField("Password");
        Button register = new Button("Register");
        register.addClickListener(e -> {
            UserDetails userDetails = User.withUsername(username.getValue())
                    .password(SecurityService.passwordEncoder().encode(password.getValue()))
                    .roles("USER")
                    .build();
            //Guardar en la base de datos H2 el usuario, agregando persistencia usando UserDetailsService,
            //inserta un control de errores en caso de que el usuario ya exista
            ((InMemoryUserDetailsManager) userDetailsService).createUser(userDetails);// TODO: Comprobar si tiene persistencia en memoria.


        });
        add(username, password, register);
    }

}
