package com.IWPhone.PanelEmpleados.view;

import com.IWPhone.Layouts.AppLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.RolesAllowed;

@RolesAllowed({"EMPLOYEE", "ADMIN"})
@PageTitle("Facturas")
@Route(value = "Facturas", layout = AppLayout.class)
public class FacturasView extends VerticalLayout {
}
