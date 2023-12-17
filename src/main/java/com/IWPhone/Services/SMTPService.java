package com.IWPhone.Services;

import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;

@Service
public class SMTPService {

    private final JavaMailSender emailSender;

    public SMTPService(JavaMailSender emailSender){ this.emailSender = emailSender; }

    public void sendEmail(String to, String subject, String content){
        MimeMessage message = emailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        //TODO: Testear
        try {
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(content, true);
            emailSender.send(message);
        } catch(jakarta.mail.MessagingException e) { e.printStackTrace(System.out); }
    }
}
