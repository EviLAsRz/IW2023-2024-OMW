package com.IWPhone.PanelUsuarios.view;

import com.IWPhone.Layouts.UserLayout;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.RolesAllowed;

@Route(layout = UserLayout.class)
@RolesAllowed({"USER", "ADMIN"})
public class PanelUsuariosView extends VerticalLayout{

    public PanelUsuariosView(){

        add(
                new H1("Mi perfil")
        );
    }
}
