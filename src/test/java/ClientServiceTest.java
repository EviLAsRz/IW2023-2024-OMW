import com.IWPhone.Models.Client;
import com.IWPhone.Repositories.ClientRepo;
import com.IWPhone.Services.ApiManagerService;
import com.IWPhone.Services.ApplicationUserService;
import com.IWPhone.Services.ClientService;
import com.IWPhone.security.SecurityService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import static org.junit.jupiter.api.Assertions.*;
import java.util.Optional;
import java.util.UUID;

@SpringBootTest(classes = IwBankApplicationTests.class)
public class ClientServiceTest {

    SecurityService securityService;

    @MockBean
    ClientRepo clientRepo;
    ApplicationUserService applicationUserService;
    ApiManagerService apiManagerService;
    ClientService clientService;

    @BeforeEach
    void setup() {
        clientService = new ClientService(securityService, clientRepo, applicationUserService, apiManagerService);
    }

    @Test
    void testGetClientDNI(){
        UUID id = UUID.randomUUID();
        //Creamos un Client con los datos de prueba
        Client client = new Client();
        client.setDNI("12345678A");
        client.setAddress("Calle Falsa 123");
        client.setMobilePhone("123456789");
        client.setLandline("123456789");

        Mockito.when(clientRepo.findById(id)).thenReturn(Optional.of(client));
        String result = clientService.getDNI(id);
        assertEquals("12345678A", result);

    }

    @Test
    void testSetDNI(){
        UUID id = UUID.randomUUID();
        //Creamos un Client con los datos de prueba
        Client client = new Client();
        client.setDNI("12345678A");
        client.setAddress("Calle Falsa 123");
        client.setMobilePhone("123456789");
        client.setLandline("123456789");

        Mockito.when(clientRepo.findById(id)).thenReturn(Optional.of(client));
        clientService.setDNI(id, "12345678b");
        assertEquals("12345678b", client.getDNI());
    }

    @Test
    void testGetAddressByDNI(){
        Client client = new Client();
        client.setDNI("12345678A");
        client.setAddress("Calle Falsa 123");
        client.setMobilePhone("123456789");
        client.setLandline("123456789");

        Mockito.when(clientRepo.findBy_sDNI("12345678A")).thenReturn(client);

        String result = clientService.getAddressByDNI("12345678A");
        assertEquals("Calle Falsa 123", result);

    }

    @Test
    void testSetAddressByDNI(){
        Client client = new Client();
        client.setDNI("12345678A");
        client.setAddress("Calle Falsa 123");
        client.setMobilePhone("123456789");
        client.setLandline("123456789");

        Mockito.when(clientRepo.findBy_sDNI("12345678A")).thenReturn(client);
        clientService.setAddressByDNI("12345678A", "Calle Falsa 124");
        assertEquals("Calle Falsa 124", client.getAddress());

    }

    @Test
    void testGetMobilePhoneByDNI(){
        Client client = new Client();
        client.setDNI("12345678A");
        client.setAddress("Calle Falsa 123");
        client.setMobilePhone("123456789");
        client.setLandline("123456789");

        Mockito.when(clientRepo.findBy_sDNI("12345678A")).thenReturn(client);

        String result = clientService.getMobilePhoneByDNI("12345678A");
        assertEquals("123456789", result);

    }

    @Test
    void testGetLandLineByDNI(){
        Client client = new Client();
        client.setDNI("12345678A");
        client.setAddress("Calle Falsa 123");
        client.setMobilePhone("123456789");
        client.setLandline("123456789");

        Mockito.when(clientRepo.findBy_sDNI("12345678A")).thenReturn(client);

        String result = clientService.getLandlineByDNI("12345678A");
        assertEquals("123456789", result);
    }

    @Test
    void testSetLandLineByDNI(){
        Client client = new Client();
        client.setDNI("12345678A");
        client.setAddress("Calle Falsa 123");
        client.setMobilePhone("123456789");
        client.setLandline("123456789");

        Mockito.when(clientRepo.findBy_sDNI("12345678A")).thenReturn(client);
        clientService.setLandlineByDNI("12345678A", "123456788");
        assertEquals("123456788", client.getLandline());
    }

    @Test
    void testGetClientByDNI(){
        Client client = new Client();
        client.setDNI("12345678A");
        client.setAddress("Calle Falsa 123");
        client.setMobilePhone("123456789");
        client.setLandline("123456789");

        Mockito.when(clientRepo.findBy_sDNI("12345678A")).thenReturn(client);
        Client result = clientService.getClientByDNI("12345678A");
        assertEquals(client, result);
    }

    @Test
    void testGetClientByID(){
        UUID uuid = UUID.randomUUID();
        Client client = new Client();
        client.setDNI("12345678A");
        client.setAddress("Calle Falsa 123");
        client.setMobilePhone("123456789");
        client.setLandline("123456789");
        Mockito.when(clientRepo.findById(uuid)).thenReturn(Optional.of(client));
        Client result = clientService.getClientById(uuid);
        assertEquals(client, result);
    }

    @Test
    void testTelefonoExiste(){
        UUID uuid = UUID.randomUUID();
        Client client = new Client();
        client.setDNI("12345678A");
        client.setAddress("Calle Falsa 123");
        client.setMobilePhone("123456789");
        client.setLandline("123456789");
        Mockito.when(clientRepo.findBy_sLandline("123456789")).thenReturn(client);
        Mockito.when(clientRepo.findBy_sMobilePhone("123456789")).thenReturn(client);

        boolean result = clientService.telefonoExiste("123456789");
        assertEquals(true, result);

    }

}

























