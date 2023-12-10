package com.IWPhone.login.views;

import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.BeforeEnterEvent;
import com.vaadin.flow.router.BeforeEnterObserver;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.flow.component.button.Button;
import com.IWPhone.registration.views.ClientRegistration;

import java.awt.*;

@Route("login")
@PageTitle("Acceso de Usuario IW")
@AnonymousAllowed
@CssImport("./loginStyle.css")
public class LoginView extends VerticalLayout implements BeforeEnterObserver {

    FormLayout formLayout = new FormLayout();
    TextField usernameField = new TextField();
    PasswordField passwordField = new PasswordField();
    Button loginButton = new Button("continuar");

    public LoginView(){

        //username settings
        usernameField.setRequiredIndicatorVisible(true);
        usernameField.setMinWidth("400px");
        usernameField.setMinLength(9);
        usernameField.setMaxLength(9);
        usernameField.setLabel("Dni");
        formLayout.add(usernameField);

        //password settings
        passwordField.setRequiredIndicatorVisible(true);
        passwordField.setMinWidth("400px");
        passwordField.setMinLength(8);
        passwordField.setMaxLength(50);
        passwordField.setLabel("Contraseña");
        formLayout.add(passwordField);

        addClassName("login-view");
        setSizeFull();
        setAlignItems(Alignment.CENTER);
        setJustifyContentMode(JustifyContentMode.CENTER);

        //form layout styles
        formLayout.addClassName("form-layout");

        VerticalLayout loginLayout = new VerticalLayout(
                new H2("Iniciar sesión"),
                usernameField,
                passwordField
        );
        loginLayout.setAlignItems(Alignment.CENTER);
        loginLayout.setJustifyContentMode(JustifyContentMode.CENTER);
        
        loginButton.addClickListener(e -> {
            String dniValue = usernameField.getValue();
            //Test if user exists!!
            //createUser(usernameField.getValue(), passwordField.getValue());

        });

        add(formLayout, loginLayout, loginButton);
    }

    @Override
    public void beforeEnter(BeforeEnterEvent beforeEnterEvent) {
        // inform the user about an authentication error
        if(beforeEnterEvent.getLocation()
                .getQueryParameters()
                .getParameters()
                .containsKey("error")) {
        }
    }
}
