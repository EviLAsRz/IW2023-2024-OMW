package com.IWPhone.Services;

import com.IWPhone.Models.PasswordResetToken;
import com.IWPhone.Repositories.PasswordResetTokenRepository;
import com.vaadin.flow.component.notification.Notification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.chrono.ChronoLocalDateTime;
import java.util.Optional;
import java.util.UUID;
import java.time.ZoneOffset;

@Service
public class PasswordResetService {

    @Autowired
    private PasswordResetTokenRepository tokenRepository;

    public PasswordResetToken createTokenForUser(String email) {

        LocalDateTime now = LocalDateTime.now(ZoneOffset.UTC);
        // Calcula la fecha de expiración sumando una semana a la hora actual
        LocalDateTime expiryDate = now.plusWeeks(1);
        PasswordResetToken token = new PasswordResetToken();
        token.setToken(UUID.randomUUID().toString());
        token.setExpiryDate(expiryDate);
        token.setEmail(email);
        token.setValid(true);
        return token;
    }

    public void saveTokenForUser(PasswordResetToken token) {
        tokenRepository.save(token);
    }

    public void changeisValidValuetoFalse(String token) {
        Optional<PasswordResetToken> optionalToken = tokenRepository.findByToken(token);
        if(optionalToken.isPresent()) {
            Notification.show("Token cambia valor a false");
            optionalToken.get().setValid(false);
            tokenRepository.save(optionalToken.get());
        }
    }
    public boolean verifyToken(String token){
        Optional<PasswordResetToken> optionalToken = tokenRepository.findByToken(token);

        if(optionalToken.isEmpty()) {
            Notification.show("Token no encontrado");
            return false;
        }

        if (!optionalToken.get().isValid()) {
            Notification.show("Token no valido");
            return false;
        }
        /*
        if (!optionalToken.get().getExpiryDate().isBefore(ChronoLocalDateTime.from(LocalTime.now()))) {
            Notification.show("Token expirado");
            return false;
        }
        */
        return true;
    }

    // Otros métodos relacionados con el restablecimiento de la contraseña...
}

