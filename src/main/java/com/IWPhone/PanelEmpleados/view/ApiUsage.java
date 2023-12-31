package com.IWPhone.PanelEmpleados.view;


import com.IWPhone.Services.ApiManagerService;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.PermitAll;

import java.util.Map;

@PermitAll
@Route("apiUsage")
public class ApiUsage extends VerticalLayout {
    private final ApiManagerService service;
    public ApiUsage(){
        this.service = new ApiManagerService();

        //Prueba de imprimir el map resultado de la API
        Map<String,String> map = service.getAllCarrierPhones();
        String result = "Resultado: \n";
        if(map != null){
            for (Map.Entry<String, String> entry : map.entrySet()) {
                result += entry.getKey() + " : " + entry.getValue() + "||||||||||||||||";
            }
        } else {
            result = "Error al obtener los datos de la API";
        }

        //ID De telefono de prueba
        service.deletePhone("9895624092");

        add("Se han cosumido :" +service.getDataConsumption("6155169263","2023-12-01","2023-12-31") + " GB de datos");
    }



}
