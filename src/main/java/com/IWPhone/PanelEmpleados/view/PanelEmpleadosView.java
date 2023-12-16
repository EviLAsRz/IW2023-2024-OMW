package com.IWPhone.PanelEmpleados.view;

import com.IWPhone.Layouts.EmployeeLayout;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.RolesAllowed;

@Route( layout = EmployeeLayout.class)
@RolesAllowed({"EMPLOYEE", "ADMIN"})
public class PanelEmpleadosView extends VerticalLayout {
    public PanelEmpleadosView(){

        //En la vista principal tendra los contratatos que aun no han sido dados de alta



        add(
                //TODO: AGREGAR GESTION DE PERFIL
                new H1("Mi perfil")
        );
    }
}
