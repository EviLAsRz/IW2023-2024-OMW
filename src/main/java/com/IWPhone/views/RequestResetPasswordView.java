package com.IWPhone.views;

import com.IWPhone.Models.PasswordResetToken;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.orderedlayout.FlexLayout;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.IWPhone.Services.EmailService;
import com.IWPhone.Services.PasswordResetService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.regex.Pattern;

@Route("reset-password")
@PageTitle("Reestablecer contraseña")
@AnonymousAllowed
public class RequestResetPasswordView extends FlexLayout {

    @Autowired
    private EmailService smtpService;

    @Autowired
    private PasswordResetService passwordService;

    private VerticalLayout formLayout;
    private Div FirstSection;
    private Div secondSection;

    public RequestResetPasswordView(){

        formLayout = getFormLayout();
        secondSection = new Div();
        secondSection.getStyle().set("display", "none"); // Inicialmente oculto

        //Separar el boton de submit del campo de email, para mejorar estetica.
        FirstSection = new Div();
        FirstSection.add(formLayout);
        FirstSection.getStyle().set("width", "325px");
        FirstSection.getStyle().set("height", "325px");
        FirstSection.getStyle().set("border", "1px solid transparent");
        FirstSection.getStyle().set("background-color", "#2d3d53");
        FirstSection.getStyle().set("padding", "10px");
        add(FirstSection);

        add(secondSection);

        //Estilos
        getStyle().set("display", "flex");
        getStyle().set("justify-content", "center");
        getStyle().set("align-items", "center");
        getStyle().set("height", "100vh");
    }

    private VerticalLayout getFormLayout() {
        H2 resetLabel = new H2("Password assistance");
        Paragraph contextText = new Paragraph("Enter the e-mail adress associated with your account.");
        EmailField emailField = new EmailField("E-mail");
        emailField.setSizeFull();
        emailField.setErrorMessage("Please enter a valid email address");
        Button submitButton = getButton(emailField);

        VerticalLayout formLayout = new VerticalLayout();
        formLayout.add(resetLabel,contextText, emailField, submitButton);
        return formLayout;
    }

    private Button getButton(EmailField emailField) {
        Button submitButton = new Button("Continue");
        submitButton.setThemeName("primary");
        submitButton.setSizeFull();

        submitButton.addClickListener(event-> {
            String email = emailField.getValue();
            if (isValidEmail(email)) {
                //creamos el token del usuario y lo enlazamos al email
                PasswordResetToken tokenClass = passwordService.createTokenForUser(email);
                passwordService.saveTokenForUser(tokenClass);
                Notification.show("Is token valid: " + passwordService.verifyToken(tokenClass.getToken()));
                Notification.show("Token: " + tokenClass.getToken());
                //envío del token + informacion del mail
                smtpService.sendEmail(tokenClass, email, "Password reset", "You requested a password reset. Please follow the instructions in the email.");
                FirstSection.getStyle().set("display","none");
                secondSection.getStyle().set("display","block");

                //mensaje de exito
                Paragraph myParagraph = new Paragraph("We have sent an email to " + email + ". Please check your inbox for further instructions.");
                myParagraph.getElement().getStyle().set("font-size", "20px");
                secondSection.add(myParagraph);
            }
        });
        return submitButton;
    }

    private static boolean isValidEmail(String email) {
        String emailRegex = "^[A-Za-z0-9+_.-]+@(.+)$";
        Pattern pat = Pattern.compile(emailRegex);
        if (email == null)
            return false;
        return pat.matcher(email).matches();
    }

}
