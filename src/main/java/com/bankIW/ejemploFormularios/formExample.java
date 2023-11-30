package com.bankIW.ejemploFormularios;

import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;

import java.awt.*;

public class formExample extends FormLayout {
    private TextField _oFirstName;
    public TextField getFirstName() { return _oFirstName; }

    public TextField _oLastName;
    public TextField getLastName() { return _oLastName; }

    public formExample() {
        TextField firstName = new TextField("First name");
        TextField lastName = new TextField("Last name");
        TextField username = new TextField("Username");
        PasswordField password = new PasswordField("Password");
        PasswordField confirmPassword = new PasswordField("Confirm password");

        FormLayout formLayout = new FormLayout();
        formLayout.add(firstName, lastName, username, password,
                confirmPassword);
        formLayout.setResponsiveSteps(
                // Use one column by default
                new ResponsiveStep("0", 1),
                // Use two columns, if layout's width exceeds 500px
                new ResponsiveStep("500px", 2));
// Stretch the username field over 2 columns
        formLayout.setColspan(username, 2);
    }



}
