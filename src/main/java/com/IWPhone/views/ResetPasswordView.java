package com.IWPhone.views;

import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.orderedlayout.FlexLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import java.awt.*;

@Route("reset-password")
@AnonymousAllowed
public class ResetPasswordView extends FlexLayout {

    public ResetPasswordView(){

        H2 resetLabel = new H2("Password");
        Paragraph contextText = new Paragraph("Please enter your e-mail.");
        TextField emailField = new TextField("E-mail");
        emailField.setSizeFull();
        Button submitButton = new Button("Continue");

        submitButton.addClickListener(event-> {
            String email = emailField.getValue();
        });
        //TODO: Manejar el envio del correo para reestablecer la contraseña

        //Centrado del boton submit
        HorizontalLayout buttonLayout = new HorizontalLayout();
        buttonLayout.setJustifyContentMode(JustifyContentMode.CENTER);
        buttonLayout.setSizeFull();
        buttonLayout.add(submitButton);

        VerticalLayout formLayout = new VerticalLayout();
        formLayout.add(resetLabel,contextText, emailField, buttonLayout);

        //Separar el boton de submit del campo de email, para mejorar estetica.
        buttonLayout.setMargin(true);

        Div card = new Div();
        card.add(formLayout);
        card.getStyle().set("width", "300px");
        card.getStyle().set("height", "350px");
        card.getStyle().set("border", "1.2px solid white");
        card.getStyle().set("padding", "10px");
        card.getStyle().set("border-radius", "5px");
        add(card);

        //Estilos

        getStyle().set("display", "flex");
        getStyle().set("justify-content", "center");
        getStyle().set("align-items", "center");
        getStyle().set("height", "100vh");
    }
}
