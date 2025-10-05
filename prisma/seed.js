// prisma/seed.js DOSYASININ YENİ VE GÜVENLİ HALİ

const { PrismaClient } = require('@prisma/client');
const { hash } = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  // === GİRİŞ BİLGİLERİNİZ ===
  // Lütfen bu şifreyi daha sonra kendinize özel, tahmin edilmesi zor bir şeyle değiştirin.
  const adminEmail = "admin@capparocks.com";
  const adminPassword = "GucluBirSifre123!";
  const adminName = "Emre Davarci";
  // ==========================

  console.log("Seed script'i başlatılıyor...");

  // Önce mevcut admin kullanıcısını bul ve sil (varsa).
  const existingUser = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (existingUser) {
    console.log(`Mevcut admin kullanıcısı (${adminEmail}) bulunuyor, siliniyor...`);
    await prisma.user.delete({
      where: { email: adminEmail },
    });
    console.log("Eski kullanıcı başarıyla silindi.");
  }

  // Şifreyi güvenli bir şekilde şifreliyoruz (hash'liyoruz).
  const hashedPassword = await hash(adminPassword, 12);

  // Yeni admin kullanıcısını oluştur.
  await prisma.user.create({
    data: {
      email: adminEmail,
      password: hashedPassword,
      name: adminName,
    },
  });
  console.log(`'${adminEmail}' e-postası ile yeni admin kullanıcısı başarıyla oluşturuldu.`);
  console.log(`Şifreniz: ${adminPassword}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Seed script'i sırasında bir hata oluştu:", e);
    await prisma.$disconnect();
    process.exit(1);
  });