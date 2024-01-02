package com.IWPhone.views;

import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.orderedlayout.FlexLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;

@Route("change-password")
@PageTitle("Cambiar contraseña")
@AnonymousAllowed
public class ChangePasswordView extends FlexLayout {

    public ChangePasswordView(){
        Paragraph test = new Paragraph("Vista ChangePasswordView");
        add(test);
    }
}
