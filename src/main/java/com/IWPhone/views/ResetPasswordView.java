package com.IWPhone.views;

import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.orderedlayout.FlexLayout;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import java.util.regex.Pattern;

@Route("reset-password")
@AnonymousAllowed
public class ResetPasswordView extends FlexLayout {

    public ResetPasswordView(){

        VerticalLayout formLayout = getFormLayout();

        //Separar el boton de submit del campo de email, para mejorar estetica.
        Div card = new Div();
        card.add(formLayout);
        card.getStyle().set("width", "325px");
        card.getStyle().set("height", "325px");
        card.getStyle().set("border", "1px solid transparent");
        card.getStyle().set("background-color", "#2d3d53");
        card.getStyle().set("padding", "10px");
        add(card);

        //Estilos
        getStyle().set("display", "flex");
        getStyle().set("justify-content", "center");
        getStyle().set("align-items", "center");
        getStyle().set("height", "100vh");
    }

    private static VerticalLayout getFormLayout() {
        H2 resetLabel = new H2("Password assistance");
        Paragraph contextText = new Paragraph("Enter the e-mail adress associated with your account.");
        EmailField emailField = new EmailField("E-mail");
        emailField.setSizeFull();
        emailField.setErrorMessage("Please enter a valid email address");
        Button submitButton = new Button("Continue");
        submitButton.setThemeName("primary");
        submitButton.setSizeFull();

        submitButton.addClickListener(event-> {
            String email = emailField.getValue();
            if (isValidEmail(email)) {
                //TODO: Manejar el envio del correo para reestablecer la contraseña
            }
        });


        VerticalLayout formLayout = new VerticalLayout();
        formLayout.add(resetLabel,contextText, emailField, submitButton);
        return formLayout;
    }

    private static boolean isValidEmail(String email) {
        String emailRegex = "^[A-Za-z0-9+_.-]+@(.+)$";
        Pattern pat = Pattern.compile(emailRegex);
        if (email == null)
            return false;
        return pat.matcher(email).matches();
    }
}
