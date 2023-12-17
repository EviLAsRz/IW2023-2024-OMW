package com.IWPhone.Layouts;

import com.IWPhone.MainView;
import com.IWPhone.PanelUsuarios.view.PanelUsuariosView;
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

import java.awt.*;

public class UserLayout extends AppLayout {

    SecurityService securityService;

    private final Button logoutBtn = new Button("Cerrar sesión");
    private final Button profileBtn = new Button("Perfil");
    public UserLayout(SecurityService ser) {
        this.securityService = ser;
        createHeader();
        createDrawer();
    }

    private void createHeader() {

        //events
        logoutBtn.addClickListener(e -> logoutBtn.getUI().ifPresent(ui ->
                ui.navigate("login")));

        //TODO: Gestionar la vista del perfil del los usuarios
        profileBtn.addClickListener(e -> profileBtn.getUI().ifPresent(ui ->
                ui.navigate("login")));

        H1 logo = new H1("Panel Usuario");
        logo.addClassNames(
                LumoUtility.FontSize.LARGE,
                LumoUtility.Margin.MEDIUM);

        //menu

        MenuBar menubar = new MenuBar();
        menubar.addThemeVariants(MenuBarVariant.LUMO_END_ALIGNED);
        menubar.addClassNames(LumoUtility.Margin.Start.LARGE);
        MenuItem share = menubar.addItem(securityService.getAuthenticatedUser().getUsername());
        SubMenu shareSubMenu = share.getSubMenu();
        shareSubMenu.addItem("Perfil");
        shareSubMenu.addItem(profileBtn);
        var header = new HorizontalLayout(new DrawerToggle(), logo, menubar);

        header.setDefaultVerticalComponentAlignment(FlexComponent.Alignment.CENTER);
        header.setWidthFull();
        header.addClassNames(
                LumoUtility.Padding.Vertical.NONE,
                LumoUtility.Padding.Horizontal.MEDIUM);

        addToNavbar(header);

    }
    //TODO: Verificar si es necesario crear endpoints para los usuarios
    private void createDrawer() {


        addToDrawer(new VerticalLayout(
                //new RouterLink("User", UserView.class)
                new H2("")
        ));
    }
}

