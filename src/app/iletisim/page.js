'use client'
import { useState, useEffect } from 'react'
import { submitContactForm } from './actions'

// İkonlar için küçük bileşenler
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);
const ExclamationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
);


export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');

    const [isEmailValid, setIsEmailValid] = useState(null);
    const [isPhoneValid, setIsPhoneValid] = useState(null);
    const [isCaptchaValid, setIsCaptchaValid] = useState(null);

    const [formStatus, setFormStatus] = useState({ submitting: false, message: null, success: null });
    
    const [suggestions, setSuggestions] = useState([]);
    const emailProviders = ['gmail.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'yahoo.com'];

    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        const randomCaptcha = Math.floor(100000 + Math.random() * 900000).toString();
        setCaptcha(randomCaptcha);
    };

    const validateEmail = (value) => {
        const isValid = value.includes('@') && value.split('@')[1].includes('.');
        setIsEmailValid(isValid);
        return isValid;
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);

        if (value.includes('@') && !value.split('@')[1].includes('.')) {
            const domainPart = value.split('@')[1];
            const matchingProviders = emailProviders.filter(p => p.startsWith(domainPart));
            setSuggestions(matchingProviders.map(p => value.split('@')[0] + '@' + p));
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setEmail(suggestion);
        validateEmail(suggestion);
        setSuggestions([]);
    };
    
    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        if (value.length <= 10) {
            setPhone(value);
            setIsPhoneValid(value.length === 10);
        }
    };

    const handleCaptchaChange = (e) => {
        const value = e.target.value;
        setCaptchaInput(value);
        setIsCaptchaValid(value === captcha);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        if (!isEmailValid || !isPhoneValid || !isCaptchaValid || !name || !message) {
            setFormStatus({ submitting: false, message: 'Lütfen tüm alanları doğru bir şekilde doldurun.', success: false });
            return;
        }

        setFormStatus({ submitting: true, message: null, success: null });

        const formData = new FormData(event.currentTarget);
        const result = await submitContactForm(formData);

        setFormStatus({ submitting: false, message: result.message, success: result.success });

        if (result.success) {
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            setCaptchaInput('');
            setIsEmailValid(null);
            setIsPhoneValid(null);
            setIsCaptchaValid(null);
            generateCaptcha();
        }
    };

    return (
        // En dıştaki div'den fazla header ve footer'ı sildik.
        <div>
            {/* Sayfa Başlığı */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-serif">
                        İletişime Geçin
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Projenizi görüşmek veya hizmetlerimiz hakkında bilgi almak için bize ulaşın.
                    </p>
                </div>
            </div>

            {/* İletişim Formu ve Bilgiler */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    
                    {/* Sol Taraf: Form */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Bize Mesaj Gönderin</h2>
                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            {/* Ad Soyad */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Ad Soyad</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                            </div>
                            
                            {/* E-posta */}
                            <div className="relative">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-posta Adresi</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input value={email} onChange={handleEmailChange} type="email" name="email" id="email" required className={`block w-full pr-10 ${isEmailValid === false ? 'border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} sm:text-sm px-3 py-2 bg-white border rounded-md`}/>
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        {isEmailValid === true && <CheckIcon />}
                                        {isEmailValid === false && <ExclamationIcon />}
                                    </div>
                                </div>
                                {suggestions.length > 0 && (
                                    <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg">
                                        {suggestions.map(s => <div key={s} onClick={() => handleSuggestionClick(s)} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">{s}</div>)}
                                    </div>
                                )}
                            </div>
                            
                            {/* Telefon */}
                            <div className="relative">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefon Numarası</label>
                                <div className="mt-1 relative flex rounded-md shadow-sm">
                                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">(0)</span>
                                    <input value={phone} onChange={handlePhoneChange} type="tel" name="phone" id="phone" required className={`flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md ${isPhoneValid === false ? 'border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} sm:text-sm`}/>
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        {isPhoneValid === true && <CheckIcon />}
                                        {isPhoneValid === false && <ExclamationIcon />}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Mesaj */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mesajınız</label>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                            </div>

                            {/* Güvenlik Kodu */}
                            <div className="space-y-2">
                                <label htmlFor="captcha" className="block text-sm font-medium text-gray-700">Güvenlik Kodu</label>
                                <div className="flex items-center space-x-4">
                                    <div className="px-4 py-2 bg-gray-200 text-gray-800 font-bold rounded-md select-none text-lg tracking-widest">
                                        {captcha}
                                    </div>
                                    <div className="relative flex-1">
                                        <input value={captchaInput} onChange={handleCaptchaChange} type="text" name="captcha" id="captcha" required className={`block w-full pr-10 ${isCaptchaValid === false ? 'border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} sm:text-sm px-3 py-2 bg-white border rounded-md`}/>
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            {isCaptchaValid === true && <CheckIcon />}
                                            {isCaptchaValid === false && <ExclamationIcon />}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Gönder Butonu */}
                            <div>
                                <button type="submit" disabled={formStatus.submitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300">
                                    {formStatus.submitting ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                                </button>
                            </div>

                            {formStatus.message && (
                                <p className={`text-center font-medium ${formStatus.success ? 'text-green-600' : 'text-red-600'}`}>
                                    {formStatus.message}
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Sağ Taraf: İletişim Bilgileri */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 font-serif">Adresimiz</h3>
                            <p className="mt-2 text-gray-500">
                                [Buraya Adres Bilgileriniz Gelecek]<br/>
                                Nevşehir, Türkiye
                            </p>
                        </div>
                         <div>
                            <h3 className="text-xl font-semibold text-gray-900 font-serif">Bize Ulaşın</h3>
                            <p className="mt-2 text-gray-500">
                                E-posta: <a href="mailto:iletisim@capparocks.com" className="text-blue-600 hover:underline">iletisim@capparocks.com</a>
                            </p>
                             <p className="mt-1 text-gray-500">
                                Telefon: <a href="tel:+905000000000" className="text-blue-600 hover:underline">+90 500 000 00 00</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

