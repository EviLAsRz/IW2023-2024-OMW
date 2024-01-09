package com.IWPhone.Services;

import com.IWPhone.Models.Factura;
import com.itextpdf.io.source.ByteArrayOutputStream;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;
import org.springframework.stereotype.Service;

@Service
public class PdfService {

    public byte[] createPdf(Factura factura) throws Exception {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        PdfWriter writer = new PdfWriter(baos);
        PdfDocument pdf = new PdfDocument(writer);
        Document document = new Document(pdf);

        // Agrega los datos de la factura al documento
        document.add(new Paragraph("DNI del Cliente: " + factura.getContract().getClient()));
        document.add(new Paragraph("Fecha de la factura: " + factura.get_fecha()));
        document.add(new Paragraph("Detalles: " + factura.get_detalles()));
        document.add(new Paragraph("IVA: " + factura.get_iva()));

        document.close();
        return baos.toByteArray();
    }
}


