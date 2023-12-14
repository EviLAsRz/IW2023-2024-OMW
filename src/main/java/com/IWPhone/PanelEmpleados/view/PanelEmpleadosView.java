package com.IWPhone.PanelEmpleados.view;

import com.IWPhone.Layouts.EmployeeLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.RolesAllowed;

@Route( layout = EmployeeLayout.class)
@RolesAllowed({"EMPLOYEE", "ADMIN"})
public class PanelEmpleadosView extends VerticalLayout {
    public PanelEmpleadosView(){
        add("Panel de Empleados");
    }
}
