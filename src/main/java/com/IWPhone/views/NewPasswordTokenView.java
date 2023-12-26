package com.IWPhone.views;

import com.IWPhone.Services.PasswordResetService;
import com.IWPhone.login.views.LoginView;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.FlexLayout;
import com.vaadin.flow.router.BeforeEvent;
import com.vaadin.flow.router.HasUrlParameter;
import com.vaadin.flow.router.OptionalParameter;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

@Route("new-password")
@AnonymousAllowed
public class NewPasswordTokenView extends FlexLayout implements HasUrlParameter<String> {

    @Autowired
    private PasswordResetService passwordService;

    @Override
    public void setParameter(BeforeEvent event, @OptionalParameter String parameter) {
        Optional<String> tokenOptional = event.getLocation().getQueryParameters().getSingleParameter("token");

        if (tokenOptional.isPresent()) {
            String token = tokenOptional.get();
            boolean isTokenValid = passwordService.verifyToken(token);
            Notification.show("Is token valid: " + isTokenValid);

            if (isTokenValid) {
                Paragraph test = new Paragraph("Vista NewPasswordTokenView");
                add(test);
            } else {
                Notification.show("Token: " + token);
                event.rerouteTo(LoginView.class);
            }
        } else {
            Notification.show("No token provided.");
            event.rerouteTo(LoginView.class);
        }
    }
}

