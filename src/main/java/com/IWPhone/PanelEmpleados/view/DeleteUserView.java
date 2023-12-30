package com.IWPhone.PanelEmpleados.view;

import com.IWPhone.Layouts.AppLayout;
import com.IWPhone.Models.ApplicationUser;
import com.IWPhone.Services.ApplicationUserService;
import com.IWPhone.Services.EmailService;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.RolesAllowed;
import java.util.Set;//No permite repeticion

@Route(value = "deleteUser",layout = AppLayout.class)
@RolesAllowed("ADMIN")
@PageTitle(value ="Panel de Baja de Usuarios")
public class DeleteUserView extends VerticalLayout {
    private final ApplicationUserService applicationUserService;
    private final SecurityService securityService;

    private final EmailService emailService;

    private Grid<ApplicationUser> gridUsuarios = new Grid<ApplicationUser>(ApplicationUser.class,false);
    private Button darDeBajaBtn = new Button("Dar de baja");
    private Button darDeAltaBtn = new Button("Dar de alta");
    public DeleteUserView(ApplicationUserService applicationUserService, SecurityService securityService, EmailService emailService) {
        this.applicationUserService = applicationUserService;
        this.securityService = securityService;
        this.emailService = emailService;

        //Data fetching
        getAllUsers();

        //Events
        darDeBajaBtn.addClickListener(e -> darDeBaja());
        darDeAltaBtn.addClickListener(e -> darDeAlta());


        //Layout
        add(
                new H1("Panel de Baja de Usuarios")
                , gridUsuarios,
                new HorizontalLayout(darDeBajaBtn,darDeAltaBtn)
        );

    }

    private void getAllUsers(){
        gridUsuarios.setSelectionMode(Grid.SelectionMode.MULTI);
        gridUsuarios.setItems(applicationUserService.getAllUsers());
        //Ponemos las columnas que queremos que se muestren
        gridUsuarios.addColumn(ApplicationUser::getUsername).setHeader("DNI");
        gridUsuarios.addColumn(ApplicationUser::getName).setHeader("Nombre");
        gridUsuarios.addColumn(ApplicationUser::getSurname).setHeader("Apellidos");
        gridUsuarios.addColumn(ApplicationUser::getRole).setHeader("Rol");
        gridUsuarios.addColumn(ApplicationUser::getEliminationDate).setHeader("Fecha de baja");

    }

    private void darDeBaja(){
        if(gridUsuarios.getSelectedItems().isEmpty()){
            Notification notification = new Notification("No se ha seleccionado ningún usuario",3000);
            notification.open();
            return;
        }
        //Obtenemos los usuarios seleccionados
        Set<ApplicationUser> selectedUsers = gridUsuarios.getSelectedItems();
        //Recorremos los usuarios seleccionados
        for (ApplicationUser user : selectedUsers){
            //Comprobamos que no sea el usuario que esta logueado
            if (!user.getUsername().equals(securityService.getAuthenticatedUser().getUsername())){
                if (user.getEliminationDate() == null){
                    //Damos de baja al usuario
                    applicationUserService.disableUser(user.getUsername());
                    //TODO:Mandar un correo al dar de baja
                    emailService.sendCustomEmail(user.getEmail(),"Baja de usuario","Su cuenta ha sido dada de baja");
                }

            }
        }
        refreshDataTable();
    }

    private void darDeAlta(){
        if(gridUsuarios.getSelectedItems().isEmpty()){
            Notification notification = new Notification("No se ha seleccionado ningún usuario",3000);
            notification.open();
            return;
        }
        //Obtenemos los usuarios seleccionados
        Set<ApplicationUser> selectedUsers = gridUsuarios.getSelectedItems();
        //Recorremos los usuarios seleccionados
        for (ApplicationUser user : selectedUsers){
            //Comprobamos que no sea el usuario que esta logueado
            if (!user.getUsername().equals(securityService.getAuthenticatedUser().getUsername())){
                if (user.getEliminationDate() != null){
                    //Damos de baja al usuario
                    applicationUserService.enableUser(user.getUsername());
                    emailService.sendCustomEmail(user.getEmail(),"Alta de usuario","Su cuenta ha sido dada de alta");
                    //TODO: Agregar al correo la direccion de la pagina de reclamaciones
                }

            }
        }
        refreshDataTable();//Actualizamos la tabla
    }

    void refreshDataTable(){
        gridUsuarios.setItems(applicationUserService.getAllUsers());
    }


}

























