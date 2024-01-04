package com.IWPhone.PanelEmpleados.view;

import com.IWPhone.Layouts.AppLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.RolesAllowed;

@Route(value = "gestionConsultas", layout = AppLayout.class)
@RolesAllowed({"EMPLOYEE","ADMIN"})
public class GestionConsultasView extends VerticalLayout {

    GestionConsultasView(){

    }

}
