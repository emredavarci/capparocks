'use server'

import { headers } from 'next/headers'

// Telefon numarasının ilk 3 hanesinin geçerli bir operatör kodu olup olmadığını kontrol eden yardımcı fonksiyon
function isValidTurkishOperatorCode(phone) {
  if (typeof phone !== 'string' || phone.length !== 10) {
    return false;
  }
  const prefix = parseInt(phone.substring(0, 3), 10);

  // Türkiye'deki yaygın mobil operatör kod aralıkları
  const isTurkTelekom1 = prefix >= 501 && prefix <= 507;
  const isTurkcell = prefix >= 530 && prefix <= 539;
  const isVodafone = prefix >= 540 && prefix <= 549;
  const isTurkTelekom2 = (prefix >= 551 && prefix <= 555) || prefix === 559;

  return isTurkTelekom1 || isTurkcell || isVodafone || isTurkTelekom2;
}


// Bu fonksiyon, form gönderildiğinde sunucuda çalışacak.
export async function submitContactForm(formData) {
  try {
    // Form verilerini okunabilir bir objeye dönüştürüyoruz.
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    // YENİ: Telefon numarası operatör kodu doğrulaması
    if (!isValidTurkishOperatorCode(data.phone)) {
      return { success: false, message: 'Lütfen geçerli bir operatör koduna sahip telefon numarası girin.' };
    }

    // İstek başlıklarından IP adresini alıyoruz (Güncellenmiş Yöntem).
    const headersList = headers();
    const forwardedFor = headersList.get('x-forwarded-for');
    const realIp = headersList.get('x-real-ip');

    let ip = '127.0.0.1'; // Varsayılan olarak localhost ata
    if (forwardedFor) {
      ip = forwardedFor.split(',')[0].trim();
    } else if (realIp) {
      ip = realIp.trim();
    }
    
    // Şu anki tarihi ve saati ekliyoruz.
    const submissionDate = new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' });

    // Tüm bilgileri birleştirip sunucu konsoluna log olarak yazdırıyoruz.
    console.log('--- YENİ İLETİŞİM FORMU GÖNDERİMİ ---');
    console.log('Tarih:', submissionDate);
    console.log('IP Adresi:', ip, '(Not: localhost üzerinde bu IP adresi doğru olmayabilir.)');
    console.log('İsim:', data.name);
    console.log('E-posta:', data.email);
    console.log('Telefon:', `(0)${data.phone}`);
    console.log('Mesaj:', data.message);
    console.log('------------------------------------');

    // Tarayıcıya başarılı olduğuna dair bir mesaj gönderiyoruz.
    return { success: true, message: 'Mesajınız başarıyla gönderildi. En kısa sürede size geri döneceğiz!' };

  } catch (error) {
    // Bir hata olursa, hatayı konsola yazdırıp tarayıcıya hata mesajı gönderiyoruz.
    console.error('Form gönderiminde hata:', error);
    return { success: false, message: 'Bir hata oluştu, lütfen daha sonra tekrar deneyin.' };
  }
}

