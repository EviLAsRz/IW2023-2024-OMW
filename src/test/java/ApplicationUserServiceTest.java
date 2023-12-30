import com.IWPhone.security.SecurityService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import com.IWPhone.Models.ApplicationUser;
import com.IWPhone.Repositories.ApplicationUserRepo;
import com.IWPhone.Services.ApplicationUserService;
import java.util.Optional;

@SpringBootTest(classes = IwBankApplicationTests.class)//Pasar Contexto del test
public class ApplicationUserServiceTest {

    @MockBean
    private ApplicationUserRepo appUserRepo;

    private ApplicationUserService appUserService;

    @BeforeEach
    void setup() {
        appUserService = new ApplicationUserService(appUserRepo);
    }

    @Test
    void testGetApplicationUser() {
        // Creamos un ApplicationUser con los datos de prueba
        ApplicationUser appUser = new ApplicationUser();
        appUser.setUsername("test");
        appUser.setPassword(SecurityService.passwordEncoder().encode("test"));
        appUser.setName("test");
        appUser.setSurname("test");
        appUser.setEmail("test@test.com");

        // Configuramos el mock para devolver el ApplicationUser cuando se llame a findByUsername
        Mockito.when(appUserRepo.findByUsername("test")).thenReturn(Optional.of(appUser));

        // Llamamos al método que queremos probar
        Optional<ApplicationUser> result = appUserService.getApplicationUser("test");

        // Verificamos que el resultado es el esperado
        assertTrue(result.isPresent());
        assertEquals("test", result.get().getUsername());

    }

    @Test
    void testGetName() {
        // Creamos un ApplicationUser con los datos de prueba
        ApplicationUser appUser = new ApplicationUser();
        appUser.setUsername("test");
        appUser.setPassword(SecurityService.passwordEncoder().encode("test"));
        appUser.setName("test");
        appUser.setSurname("test");
        appUser.setEmail("test@test.com");

        Mockito.when(appUserRepo.findByUsername("test")).thenReturn(Optional.of(appUser));
        String result = appUserService.getName("test");
        assertTrue(result.equals("test"));

    }

    //Lo mismo para getSurname
    @Test
    void testGetSurname() {
        // Creamos un ApplicationUser con los datos de prueba
        ApplicationUser appUser = new ApplicationUser();
        appUser.setUsername("test");
        appUser.setPassword(SecurityService.passwordEncoder().encode("test"));
        appUser.setName("test");
        appUser.setSurname("test");
        appUser.setEmail("test@test.com");

        Mockito.when(appUserRepo.findByUsername("test")).thenReturn(Optional.of(appUser));
        String result = appUserService.getSurname("test");
        assertTrue(result.equals("test"));
    }

    @Test
    void testSetUsername() {
        // Creamos un ApplicationUser con los datos de prueba
        ApplicationUser appUser = new ApplicationUser();
        appUser.setUsername("test");
        appUser.setPassword(SecurityService.passwordEncoder().encode("test"));
        appUser.setName("test");
        appUser.setSurname("test");
        appUser.setEmail("test.com");

        Mockito.when(appUserRepo.findByUsername("test")).thenReturn(Optional.of(appUser));
        appUserService.setUsername("test", "test2");
        assertTrue(appUser.getUsername().equals("test2"));
    }

    @Test
    void testSetName() {
        // Creamos un ApplicationUser con los datos de prueba
        ApplicationUser appUser = new ApplicationUser();
        appUser.setUsername("test");
        appUser.setPassword(SecurityService.passwordEncoder().encode("test"));
        appUser.setName("test");
        appUser.setSurname("test");
        appUser.setEmail("test.com");

        Mockito.when(appUserRepo.findByUsername("test")).thenReturn(Optional.of(appUser));
        appUserService.setName("test", "test2");
        assertTrue(appUser.getName().equals("test2"));
    }

    @Test
    void testSetSurname() {
        // Creamos un ApplicationUser con los datos de prueba
        ApplicationUser appUser = new ApplicationUser();
        appUser.setUsername("test");
        appUser.setPassword(SecurityService.passwordEncoder().encode("test"));
        appUser.setName("test");
        appUser.setSurname("test");
        appUser.setEmail("test.com");

        Mockito.when(appUserRepo.findByUsername("test")).thenReturn(Optional.of(appUser));
        appUserService.setSurname("test", "test2");
        assertTrue(appUser.getSurname().equals("test2"));
    }

    @Test
    void testGetMail() {
        // Creamos un ApplicationUser con los datos de prueba
        ApplicationUser appUser = new ApplicationUser();
        appUser.setUsername("test");
        appUser.setPassword(SecurityService.passwordEncoder().encode("test"));
        appUser.setName("test");
        appUser.setSurname("test");
        appUser.setEmail("test.com");

        Mockito.when(appUserRepo.findByUsername("test")).thenReturn(Optional.of(appUser));
        String result = appUserService.getMail("test");
        assertTrue(result.equals("test.com"));
    }

    @Test
    void testSetMail() {
        // Creamos un ApplicationUser con los datos de prueba
        ApplicationUser appUser = new ApplicationUser();
        appUser.setUsername("test");
        appUser.setPassword(SecurityService.passwordEncoder().encode("test"));
        appUser.setName("test");
        appUser.setSurname("test");
        appUser.setEmail("test.com");

        Mockito.when(appUserRepo.findByUsername("test")).thenReturn(Optional.of(appUser));
        appUserService.setMail("test", "test2");
        assertTrue(appUser.getEmail().equals("test2"));
    }

    @Test
    void testGetRole() {
        // Creamos un ApplicationUser con los datos de prueba
        ApplicationUser appUser = new ApplicationUser();
        appUser.setUsername("test");
        appUser.setRole("test");
        appUser.setPassword(SecurityService.passwordEncoder().encode("test"));
        appUser.setName("test");
        appUser.setSurname("test");
        appUser.setEmail("test.com");

        Mockito.when(appUserRepo.findByUsername("test")).thenReturn(Optional.of(appUser));
        String result = appUserService.getRole("test");
        assertTrue(result.equals("test"));
    }

    @Test
    void testSetRole() {
        // Creamos un ApplicationUser con los datos de prueba
        ApplicationUser appUser = new ApplicationUser();
        appUser.setUsername("test");
        appUser.setRole("test");
        appUser.setPassword(SecurityService.passwordEncoder().encode("test"));
        appUser.setName("test");
        appUser.setSurname("test");
        appUser.setEmail("test.com");

        Mockito.when(appUserRepo.findByUsername("test")).thenReturn(Optional.of(appUser));
        appUserService.setRole("test", "test2");
        assertTrue(appUser.getRole().equals("test2"));
    }


    @Test
    void testCheckMailExistence(){
        // Creamos un ApplicationUser con los datos de prueba
        ApplicationUser appUser = new ApplicationUser();
        appUser.setUsername("test");
        appUser.setRole("test");
        appUser.setPassword(SecurityService.passwordEncoder().encode("test"));
        appUser.setName("test");
        appUser.setSurname("test");
        appUser.setEmail("test.com");
        appUserRepo.save(appUser);
        boolean result = appUserService.checkMailExistence("test.com");
        appUserRepo.delete(appUser);//Borramos el usuario de prueba
        assertTrue(result);
    }

    @Test
    void testCreateAdmin() {
        // Creamos un ApplicationUser con los datos de prueba
        ApplicationUser appUser = new ApplicationUser();
        appUser.setUsername("admin");
        appUser.setRole("admin");
        appUser.setPassword(SecurityService.passwordEncoder().encode("admin"));
        appUser.setName("admin");
        appUser.setSurname("admin");
        appUser.setEmail("test.com");

        Mockito.when(appUserRepo.findByUsername("admin")).thenReturn(Optional.of(appUser));
        appUserService.createAdmin("admin", "admin", "admin", "admin", "admin");
        assertTrue(appUser.getRole().equals("admin"));

    }


}

















