// src/app/admin/musteriler/[customerId]/yeni-rapor/actions.js DOSYASININ DOĞRU HALİ

'use server'

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import fs from 'fs';
import path from 'path';

export async function getCustomerDetails(customerId) {
  try {
    const customer = await prisma.customer.findUnique({ where: { id: customerId } });
    if (!customer) throw new Error('Müşteri bulunamadı');
    return { success: true, customer };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function saveReportToDatabase(formData) {
  const customerId = formData.get('customerId');
  const reportData = {
    reportTitle: formData.get('reportTitle'),
    platform: formData.get('platform'),
    spent: parseFloat(formData.get('spent') || 0),
    reach: parseInt(formData.get('reach') || 0),
    impressions: parseInt(formData.get('impressions') || 0),
    clicks: parseInt(formData.get('clicks') || 0),
    ctr: parseFloat(formData.get('ctr') || 0),
    conversions: parseInt(formData.get('conversions') || 0),
    customerId: customerId,
  };
  try {
    await prisma.report.create({ data: reportData });
    revalidatePath(`/admin/musteriler/${customerId}`);
    redirect(`/admin/musteriler/${customerId}`);
  } catch (error) {
    return { error: "Rapor veritabanına kaydedilirken bir hata oluştu." };
  }
}

// EKSİK OLAN VE HATAYI ÇÖZECEK OLAN FONKSİYON
export async function downloadProfessionalPdfReport(reportId) {
  try {
    const report = await prisma.report.findUnique({
      where: { id: reportId },
      include: { customer: true },
    });
    if (!report) throw new Error("Rapor bulunamadı.");

    const { customer, documentNumber } = report;
    const clientName = customer.name;
    const reportData = {
      "Rapor Başlığı": report.reportTitle,
      "Harcanan Tutar (TL)": report.spent, "Erişim (Kişi)": report.reach,
      "Gösterim": report.impressions, "Tıklamalar": report.clicks,
      "Tıklama Oranı (CTR %)": report.ctr, "Dönüşümler": report.conversions,
    };

    let analysisText = 'Yapay zeka analizi oluşturulurken bir hata meydana geldi.';
    try {
      const prompt = `Sen Kapadokya bölgesindeki bir dijital pazarlama uzmanısın. Müşterin "${clientName}" için aşağıdaki reklam verilerini analiz et ve sonuçları özetleyen, samimi ama profesyonel, 4-5 cümlelik bir analiz metni yaz. Metin "Sayın ${clientName} yetkilisi," diye başlasın. Veriler: ${JSON.stringify(reportData)}`;
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) throw new Error("Gemini API anahtarı bulunamadı.");
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
      const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }) });
      if (!response.ok) throw new Error(`API isteği başarısız: ${response.status}`);
      const result = await response.json();
      analysisText = result.candidates[0].content.parts[0].text;
    } catch (e) { console.error("Gemini API hatası:", e); }

    const doc = new jsPDF();
    const fontPath = path.resolve(process.cwd(), 'src/lib/NotoSansTurkish-Regular.ttf');
    const fontBase64 = fs.readFileSync(fontPath, { encoding: 'base64' });
    doc.addFileToVFS('NotoSansTurkish-Regular.ttf', fontBase64);
    doc.addFont('NotoSansTurkish-Regular.ttf', 'NotoSansTurkish', 'normal');
    doc.setFont('NotoSansTurkish');
    
    // PDF içeriği...
    doc.setFontSize(22);
    doc.text('Capparocks Dijital', 14, 20);
    // ...
    const tableBody = Object.entries(reportData).filter(([_, value]) => value != null).map(([key, value]) => [key, value.toLocaleString('tr-TR')]);
    autoTable(doc, { head: [["Metrik", "Değer"]], body: tableBody, startY: 60, theme: 'grid', styles: { font: 'NotoSansTurkish' } });
    const lastTableY = (doc).lastAutoTable.finalY;
    doc.setFontSize(14);
    doc.text('Yapay Zeka Destekli Detaylı Analiz', 14, lastTableY + 15);
    doc.setFontSize(11);
    const splitText = doc.splitTextToSize(analysisText, 180);
    doc.text(splitText, 14, lastTableY + 22);

    const pdfOutput = doc.output('datauristring');
    const fileName = `${clientName.replace(/ /g, '_')}_${documentNumber.slice(-8).toUpperCase()}.pdf`;
    return { success: true, pdf: pdfOutput, fileName };
  } catch (error) {
    console.error("PDF indirilirken hata:", error);
    return { success: false, message: "PDF oluşturulurken bir hata oluştu." };
  }
}