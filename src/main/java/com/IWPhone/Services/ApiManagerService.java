package com.IWPhone.Services;


import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.*;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.h2.util.json.JSONArray;

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


    public void saveClientPhone(String numero, String dniCliente){//POSTEANDO EN LA API DE OMRSIMULATOR TEST
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

        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    public Integer getCallsConsumption(String phoneNumber, String startDate, String endDate){
        //La fechas tienen que estar en formato yyyy-MM-dd
        //Pillamos los datos de ese movil usanodo la api
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url + "search/phoneNumber/"+ phoneNumber +"?carrier=" + carrier))
                .header("Content-Type", "application/json")
                .GET()
                .build();
        try{
            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());//HACER PETICION

            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode jsonNode = objectMapper.readTree(response.body());
            String numberId = jsonNode.get("id").asText();

            //System.out.println(url + numberId+ "/callrecords?carrier="+ carrier +"&startDate="+ startDate+ "&endDate="+endDate);
            //Pillamos el consumo de ese telefono en un intervalo de fechas dado
            request = HttpRequest.newBuilder()
                    .uri(URI.create(url + numberId+ "/callrecords?carrier="+ carrier +"&startDate="+ startDate+ "&endDate="+endDate))
                    .header("Content-Type", "application/json")
                    .GET()
                    .build();
            response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());//HACER PETICION

            String[] elementos = response.body().split("\\{");// []
            return elementos.length;


        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }

        return -1;
    }

    public double getDataConsumption(String number, String startDate, String endDate){
        //Pillamos el id del telefono
        String numberId = getLineId(number);

        //Pillamos el consumo de ese telefono en un intervalo de fechas dado
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url + numberId + "/datausagerecords?carrier="+carrier+"&startDate=" + startDate +"&endDate=" + endDate))
                .header("Content-Type", "application/json")
                .GET()
                .build();
        try{
            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());//HACER PETICION

            //Sumamos el consumo total de datos de ese telefono
            ObjectMapper objectMapper = new ObjectMapper();
            List<Map<String, Object>> listaDatos = objectMapper.readValue(response.body(), new TypeReference<List<Map<String, Object>>>(){});

            double sumaMegaBytes = 0.0;
            for (Map<String, Object> dato : listaDatos) {
                double megaBytes = Double.parseDouble(dato.get("megaBytes").toString());
                sumaMegaBytes += megaBytes;
            }
            return sumaMegaBytes/1024;//Medimos el consumo en gigabytes
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }
        return -1;
    }

    public String getLineId(String number){
        //La fechas tienen que estar en formato yyyy-MM-dd
        //Pillamos los datos de ese movil usanodo la api
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url + "search/phoneNumber/"+ number +"?carrier=" + carrier))
                .header("Content-Type", "application/json")
                .GET()
                .build();
        try{
            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());//HACER PETICION

            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode jsonNode = objectMapper.readTree(response.body());
            String numberId = jsonNode.get("id").asText();
            return numberId;
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }

        return null;
    }

    public void deletePhone(String number){
        String numberId = getLineId(number);
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url + numberId+ "?carrier="+ carrier))
                .header("Content-Type", "application/json")
                .DELETE()
                .build();
        try{
            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());//HACER PETICION
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }
    }


}




























