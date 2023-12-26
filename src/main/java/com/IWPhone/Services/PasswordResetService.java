package com.IWPhone.Services;

import com.IWPhone.Models.PasswordResetToken;
import com.IWPhone.Repositories.PasswordResetTokenRepository;
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
        return token;
    }

    public void saveTokenForUser(PasswordResetToken token) {
        tokenRepository.save(token);
    }

    public boolean verifyToken(String token){
        Optional<PasswordResetToken> optionalToken = tokenRepository.findByToken(token);

        if(optionalToken.isEmpty())
            //token no encontrado
            return false;

        return true;
        //comprobar si el token ha expirado
        /*
        PasswordResetToken foundToken = optionalToken.get();
        return !foundToken.getExpiryDate().isBefore(ChronoLocalDateTime.from(LocalTime.now()));

         */
    }

    // Otros métodos relacionados con el restablecimiento de la contraseña...
}

