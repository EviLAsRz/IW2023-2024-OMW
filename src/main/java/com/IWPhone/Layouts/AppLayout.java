package com.IWPhone.Layouts;

import com.IWPhone.MainView;
import com.IWPhone.PanelEmpleados.services.EmployeeProfileService;
import com.IWPhone.PanelEmpleados.view.PanelEmpleadosView;
import com.IWPhone.PanelEmpleados.view.ValidarContratosView;
import com.IWPhone.Services.EmpleadoService;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.applayout.DrawerToggle;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.contextmenu.MenuItem;
import com.vaadin.flow.component.contextmenu.SubMenu;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.menubar.MenuBar;
import com.vaadin.flow.component.menubar.MenuBarVariant;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.RouterLink;
import com.vaadin.flow.theme.lumo.LumoUtility;


public class EmployeeLayout extends AppLayout {
    private final SecurityService securityService;
    private final EmpleadoService empleadoService;
    private Button logoutBtn = new Button("Cerrar Sesión");
    private Button profileBtn = new Button("Perfil");


    public EmployeeLayout(SecurityService ser, EmpleadoService empleadoService){
        this.securityService = ser;
        this.empleadoService = empleadoService;
        createHeader();
        createDrawer();
    }

    private void createHeader() {

        //Eventos
        logoutBtn.addClickListener(e -> {
            securityService.logout();
            logoutBtn.getUI().ifPresent(ui ->
                    ui.navigate("company"));
        });


        H1 logo = new H1("Panel del Empleado de IWPhone");
        logo.addClassNames(
                LumoUtility.FontSize.LARGE,
                LumoUtility.Margin.MEDIUM);

        //Agregar un menu a la zona de la cabecera en la derecha
        MenuBar menuBar = new MenuBar();
        menuBar.addThemeVariants(MenuBarVariant.LUMO_END_ALIGNED);

        menuBar.addClassNames(LumoUtility.Margin.Start.LARGE);
        MenuItem share = menuBar.addItem(securityService.getAuthenticatedUser().getUsername());
        SubMenu shareSubMenu = share.getSubMenu();
        shareSubMenu.addItem("Perfil");
        shareSubMenu.addItem(logoutBtn);


        var header = new HorizontalLayout(new DrawerToggle(), logo, menuBar);

        header.setDefaultVerticalComponentAlignment(FlexComponent.Alignment.CENTER);
        header.setWidthFull();
        header.addClassNames(
                LumoUtility.Padding.Vertical.NONE,
                LumoUtility.Padding.Horizontal.MEDIUM);

        addToNavbar(header);

    }

    private void createDrawer() {

        //Pillamos el departamento del empleado
        String departamento = empleadoService.getEmpleado(securityService.getAuthenticatedUser().getUsername().toString()).get().
                get_tDepartamento().toString();

        VerticalLayout layout = new VerticalLayout();
        layout.setAlignItems(FlexComponent.Alignment.CENTER);
        layout.setJustifyContentMode(FlexComponent.JustifyContentMode.CENTER);
        layout.setWidthFull();
        layout.add(
                new RouterLink("Volver al incio", MainView.class)
        );
        if(empleadoService.getNombreDepartamento(securityService.getAuthenticatedUser().getUsername().toString()).equals("Atencion Al Cliente")){//Es de Atencion al cliente
            layout.add(
                    new RouterLink("Contratos por validar", ValidarContratosView.class)
            );
        }

        //TODO: Agregar los links a cada endpoint segun el tipo de empleado
        addToDrawer(
                layout
        );
    }
}

