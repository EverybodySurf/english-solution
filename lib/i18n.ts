import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Our offers": "Our offers",
        "Our team": "Our team",
        "Call us": "Call us",
        "English immersion for kids": "English immersion for kids",
        "Fun and engaging programs that awaken a lasting affinity for the English language.": "Fun and engaging programs that awaken a lasting affinity for the English language.",
        "Contact": "Contact",
        "More info": "More info",
        "From group workshops to Language stays we've got you covered": "From group workshops to Language stays we've got you covered",
        "Wednesdays": "Wednesdays",
        "Group workshops, for ages 4-10, 8am-12pm, 110€/m": "Group workshops, for ages 4-10, 8am-12pm, 110€/m",
        "Saturdays": "Saturdays",
        "Group workshops for ages 8-11, 9:30am-12:30pm, 65€/m | 6th/5th 10:30am-12:30pm, 85€/m": "Group workshops for ages 8-11, 9:30am-12:30pm, 65€/m | 6th/5th 10:30am-12:30pm, 85€/m",
        "Holiday Workshops": "Holiday Workshops",
        "All Saints' Day, Carnival, Easter 180€/w (meal included)": "All Saints' Day, Carnival, Easter 180€/w (meal included)",
        "Various Services": "Various Services",
        "Language stays, creation of texts, animation": "Language stays, creation of texts, animation",
        "Our dream team": "Our dream team",
        "Since 2014, our goal at The English Solution has been to awaken a lasting affinity for the English language through rigorous teaching provided in an encouraging and fun way. With our California senior teacher, students enjoy a real language immersion on site.": "Since 2014, our goal at The English Solution has been to awaken a lasting affinity for the English language through rigorous teaching provided in an encouraging and fun way. With our California senior teacher, students enjoy a real language immersion on site.",
        "Call or send us a message": "Call or send us a message",
        "Click the button below.": "Click the button below.",
        "Call or text today": "Call or text today",
        "The English Solution, All rights reserved": "The English Solution, All rights reserved",
        }
    },
    fr: {
      translation: {
        "Our offers": "Nos offres",
        "Our team": "Notre équipe",
        "Call us": "Appelez-nous",
        "English immersion for kids": "Immersion anglaise pour les enfants",
        "Fun and engaging programs that awaken a lasting affinity for the English language.": "Des programmes amusants et engageants qui éveillent une affinité durable pour la langue anglaise.",
        "Contact": "Contact",
        "More info": "Plus d'infos",
        "From group workshops to Language stays we've got you covered": "Des ateliers de groupe aux séjours linguistiques, nous avons tout ce qu'il vous faut",
        "Wednesdays": "Mercredis",
        "Group workshops, for ages 4-10, 8am-12pm, 110€/m": "Ateliers de groupe, pour les 4-10 ans, de 8h à 12h, 110€/m",
        "Saturdays": "Samedis",
        "Group workshops for ages 8-11, 9:30am-12:30pm, 65€/m | 6th/5th 10:30am-12:30pm, 85€/m": "Ateliers de groupe pour les 8-11 ans, de 9h30 à 12h30, 65€/m | 6ème/5ème de 10h30 à 12h30, 85€/m",
        "Holiday Workshops": "Ateliers de vacances",
        "All Saints' Day, Carnival, Easter 180€/w (meal included)": "Toussaint, Carnaval, Pâques 180€/sem (repas inclus)",
        "Various Services": "Divers services",
        "Language stays, creation of texts, animation": "Séjours linguistiques, création de textes, animation",
        "Our dream team": "Notre équipe de rêve",
        "Since 2014, our goal at The English Solution has been to awaken a lasting affinity for the English language through rigorous teaching provided in an encouraging and fun way. With our California senior teacher, students enjoy a real language immersion on site.": "Depuis 2014, notre objectif chez The English Solution est d'éveiller une affinité durable pour la langue anglaise grâce à un enseignement rigoureux dispensé de manière encourageante et amusante. Avec notre professeur senior de Californie, les élèves bénéficient d'une véritable immersion linguistique sur place.",
        "Call or send us a message": "Appelez ou envoyez-nous un message",
        "Click the button below.": "Cliquez sur le bouton ci-dessous.",
        "Call or text today": "Appelez ou envoyez un message aujourd'hui",
        "The English Solution, All rights reserved": "The English Solution, Tous droits réservés",
      }
    }
    // Add more languages here
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
})

export default i18n