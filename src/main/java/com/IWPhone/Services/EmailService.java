package com.IWPhone.Services;

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

    public void sendEmail(String to, String subject, String text) {

        String from = "IWPhone2023@gmail.com";

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


