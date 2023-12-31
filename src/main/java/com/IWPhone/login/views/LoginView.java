package com.IWPhone.login.views;

import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.login.LoginForm;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.router.BeforeEnterEvent;
import com.vaadin.flow.router.BeforeEnterObserver;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;

@Route("login")
@PageTitle("Acceso de Usuario IW")
@AnonymousAllowed
//@CssImport("./loginStyle.css")
public class LoginView extends VerticalLayout implements BeforeEnterObserver {

    private final LoginForm login = new LoginForm();
    TextField usernameField = new TextField();
    PasswordField passwordField = new PasswordField();
    Button loginButton = new Button("continuar");
    Button BacktoRegisterButton = new Button("Registrarse");

    public LoginView(){


        //username settings
        usernameField.setRequiredIndicatorVisible(true);
        usernameField.setMinWidth("400px");
        usernameField.setMinLength(9);
        usernameField.setMaxLength(9);
        usernameField.setLabel("Dni");
        //formLayout.add(usernameField);

        //password settings
        passwordField.setRequiredIndicatorVisible(true);
        passwordField.setMinWidth("400px");
        passwordField.setMinLength(8);
        passwordField.setMaxLength(50);
        passwordField.setLabel("Contraseña");
        //formLayout.add(passwordField);

        addClassName("login-view");
        setSizeFull();
        setAlignItems(Alignment.CENTER);
        setJustifyContentMode(JustifyContentMode.CENTER);

        //form layout styles
        //formLayout.addClassName("form-layout");


        login.setAction("login");
        login.addForgotPasswordListener(event -> {
            UI.getCurrent().navigate("reset-password");
        });

        BacktoRegisterButton.addClickListener(e -> {
            UI.getCurrent().navigate("register");
        });


        add(login, BacktoRegisterButton);
    }



    @Override
    public void beforeEnter(BeforeEnterEvent beforeEnterEvent) {
        // inform the user about an authentication error
        if(beforeEnterEvent.getLocation()
                .getQueryParameters()
                .getParameters()
                .containsKey("error")) {
            login.setError(true);

        }
    }
}
