import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                signUp: "Sign Up",
                signUpIntroductions: "TO DO/SignUpIntroductions",
                signUpSidebarTitle: "TO DO/signUpSidebarTitle",
                signUpSidebarContent: "TO DO//signUpSidebarContent",
                email: "E-mail",
                password: "Password",
                firstName: "First Name",
                lastName: "Last Name",
                phoneNumber: "Phone Number",
                customerCode: "Customer Code",
                gender: "Gender",
                birthDate: "Birth Date",
                men:"Men",
                women:"Women",
                campainSms: "",
                registerAgrement:""
            }
        },
        tr: {
            translation: {
                signUp: "Kayıt Ol",
                signUpIntroductions: "Sitemize kayıt olarak SHELL'in avantajlı dünyasından hemen yararlanın!",
                signUpSidebarTitle: "Avantajlı Dünyaya Kayıt Olmaya Hazır mısınız?",
                signUpSidebarContent: "Hemen sitemize ücretsiz kayıt olarak SHELL'in avantajlı dünyasından hemen yararlanın.",
                email: "Mail Adresi",
                password: "Parola",
                firstName: "Adınız",
                lastName: "Soyadınız",
                phoneNumber: "Telefon Numarası",
                customerCode: "Müşteri Kodu",
                gender: "Cinsiyet",
                birthDate: "Doğum Tarihi",
                men:"Erkek",
                women:"Kadın",
                campainSms: "Tarafımla bilgilendirme ve kampanya amaçlı iletişime geçilmesine ve sms atılmasına izin veriyorum.",
                registerAgrement: "Üyelik sözleşmesi ve Kullanım Koşulları’nı okudum ve kabul ediyorum."
            }
        }
    },
    fallbackLng: "tr",
    ns: ["translation"],
    defaultNS: "translation",
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ","
    },
    react: {
        wait: true
    }
});

export default i18n;