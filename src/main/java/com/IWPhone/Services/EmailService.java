package com.IWPhone.Services;

import com.IWPhone.Models.PasswordResetToken;
import com.IWPhone.Repositories.PasswordResetTokenRepository;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeBodyPart;
import jakarta.mail.internet.MimeMultipart;
import jakarta.mail.Message.RecipientType;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender emailSender;
    @Autowired
    private PasswordResetTokenRepository tokenRepository;

    public void sendEmail(PasswordResetToken tokenClass, String to, String subject, String text) {

        String from = "iwphone2023@gmail.com";

        try {
            MimeMessagePreparator preparator = new MimeMessagePreparator() {
                @Override
                public void prepare(MimeMessage mimeMessage) throws Exception {
                    MimeBodyPart textBodyPart = new MimeBodyPart();
                    textBodyPart.setText(text);

                    MimeMultipart mimeMultipart = new MimeMultipart();
                    mimeMultipart.addBodyPart(textBodyPart);

                    InternetAddress iaSender = new InternetAddress(from);
                    InternetAddress iaTo = new InternetAddress(to);

                    mimeMessage.setSender(iaSender);
                    mimeMessage.setSubject(subject);
                    mimeMessage.setRecipients(RecipientType.TO, new InternetAddress[]{iaTo});
                    mimeMessage.setContent(mimeMultipart);

                    //modificamos en enlace para que el usuario no vea una ruta "extraña"
                    String title = "Click here to reset your password";
                    String link = "http://localhost:8080/new-password?token=" + tokenClass.getToken();
                    String htmlLink = "<a href=\"" + link + "\" title=\"" + title + "\">" + title + "</a>";
                    mimeMessage.setContent(htmlLink, "text/html");
                }
            };
            emailSender.send(preparator);

        } catch (Exception ex) {
            ex.printStackTrace(System.out);
        }

    }

    public void sendCustomEmail(String to, String subject, String text) {

        String from = "iwphone2023@gmail.com";

        try {
            MimeMessagePreparator preparator = new MimeMessagePreparator() {
                @Override
                public void prepare(MimeMessage mimeMessage) throws Exception {
                    MimeBodyPart textBodyPart = new MimeBodyPart();
                    textBodyPart.setText(text);

                    MimeMultipart mimeMultipart = new MimeMultipart();
                    mimeMultipart.addBodyPart(textBodyPart);

                    InternetAddress iaSender = new InternetAddress(from);
                    InternetAddress iaTo = new InternetAddress(to);

                    mimeMessage.setSender(iaSender);
                    mimeMessage.setSubject(subject);
                    mimeMessage.setRecipients(RecipientType.TO, new InternetAddress[]{iaTo});
                    mimeMessage.setContent(mimeMultipart);

                }
            };
            emailSender.send(preparator);

        } catch (Exception ex) {
            ex.printStackTrace(System.out);
        }

    }
}


