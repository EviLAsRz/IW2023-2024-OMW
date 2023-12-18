package com.IWPhone.Services;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class SMTPService {

    private static JavaMailSender emailSender = null;

    public SMTPService(JavaMailSender emailSender){ this.emailSender = emailSender; }

    public static void sendEmail(String to, String subject, String content){
        MimeMessage message = emailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        //TODO: Testear
        try {
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(content, true);
            emailSender.send(message);
        } catch(MessagingException e) { e.printStackTrace(System.out); }
    }
}
