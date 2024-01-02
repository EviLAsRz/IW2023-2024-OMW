import com.IWPhone.Services.ApiManagerService;
import org.junit.jupiter.api.Test;

import java.net.http.HttpClient;
import java.net.http.HttpResponse;
import java.util.Map;
import java.net.http.HttpRequest;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class ApiManagerServiceTest {
    ApiManagerService apiManagerService = new ApiManagerService();
    @Test
    void testGetAllCarrierPhones() throws Exception{//DONE

        // Crear un mock del HttpClient
        HttpClient mockHttpClient = mock(HttpClient.class);
        HttpResponse<String> mockResponse = mock(HttpResponse.class);

        // Configurar el mock para devolver un valor específico
        when(mockResponse.body()).thenReturn("{\"name\":\"test\",\"phoneNumber\":\"12345\"}");
        when(mockHttpClient.send(any(HttpRequest.class), any(HttpResponse.BodyHandler.class))).thenReturn(mockResponse);


        // Crear una instancia de ApiManagerService, pasando el mock del HttpClient
        ApiManagerService apiManagerService = new ApiManagerService();

        // Ejecutar el método que queremos probar
        Map<String, String> result = apiManagerService.getAllCarrierPhones();

        // Verificar que el resultado es el esperado
        assertEquals("6987442990", result.get("49562495W"));
    }

    @Test
    void testSaveClientPhone() throws Exception{
       //Creamos el telefono de prueba
        apiManagerService.saveClientPhone("123456789", "49562495W");
        Map<String, String> result = apiManagerService.getAllCarrierPhones();

        // Verificar que el resultado es el esperado
        assertEquals("6987442990", result.get("49562495W"));

        //Despues de crearlo lo damos de baja
        apiManagerService.deletePhone("49562495W");

    }

    @Test
    void testDeletePhone() throws Exception{
        //Creamos el telefono de prueba
        apiManagerService.saveClientPhone("123456789", "test");
        Map<String, String> result;


        //Despues de crearlo lo damos de baja
        apiManagerService.deletePhone("123456789");
        result = apiManagerService.getAllCarrierPhones();

        // Verificar que el resultado es el esperado
        assertNull(result.get("test"));
    }

    @Test
    void testGetDataConsumption() throws Exception{
        //Usaremos siempre mi numero personal ya que ha de generar consumo peridicamente
        double dataConsumption = apiManagerService.getDataConsumption("+34611404497", "2023-01-01", "2023-12-31");
        assertTrue(dataConsumption > 0);//Si el consumo es mayor que 0 es que ha funcionado, ya que tengo seguro que he generado consumo en esas fechas
    }

    @Test
    void testGetLineId() throws Exception{
        String lineId = apiManagerService.getLineId("+34611404497");
        assertEquals("72d0f7f5-d51f-449f-ab0d-b65db50dc8c1",lineId);//Si el numero existe en la api, el id no sera null
    }

    @Test
    void testGetCallConsumption() throws Exception{
        //Usaremos siempre mi numero personal ya que ha de generar consumo peridicamente
        double callConsumption = apiManagerService.getCallsConsumption("+34611404497", "2023-01-01", "2023-12-31");
        assertTrue(callConsumption > 0);//Si el consumo es mayor que 0 es que ha funcionado, ya que tengo seguro que he generado consumo en esas fechas
    }

}



















