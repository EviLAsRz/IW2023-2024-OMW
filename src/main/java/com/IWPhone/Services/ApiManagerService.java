package com.IWPhone.Services;


import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.HashMap;
import java.util.Map;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Scanner;

import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ApiManagerService {

    private HttpClient httpClient = HttpClient.newHttpClient();

    private String url = "http://omr-simulator.us-east-1.elasticbeanstalk.com/";

    private String carrier = "IWPHONE";

    public Map<String, String> getAllCarrierPhones() {
        // Hacemos la petición a la API
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url + "?carrier=" + carrier))
                .header("Content-Type", "application/json")
                .GET()
                .build();
        try {
            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

            String responseBody = response.body();
            Pattern pattern = Pattern.compile("\"name\":\"(.*?)\".*?\"phoneNumber\":\"(.*?)\"");
            Matcher matcher = pattern.matcher(responseBody);

            Map<String, String> mapaPersonas = new HashMap<>();
            while (matcher.find()) {
                mapaPersonas.put(matcher.group(1), matcher.group(2));
            }

            return mapaPersonas;
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        return null;
    }


    public void saveClientPhone(String numero, String dniCliente){//POSTEANDO EN LA API DE OMRSIMULATOR
        Map<String, String> data = new HashMap<>();
        data.put("name", dniCliente);
        data.put("surname", dniCliente);
        data.put("carrier", carrier);
        data.put("phoneNumber", numero);

        ObjectMapper objectMapper = new ObjectMapper();
        String requestBody = "";
        try{
            requestBody = objectMapper.writeValueAsString(data);
        }catch (Exception e){
            System.out.println(e.getMessage());
        }

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                .build();
        try{
            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());//HACER PETICION
            System.out.println(response.body());
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

}
