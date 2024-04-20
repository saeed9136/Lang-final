import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from "react-i18next"

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    lng:"en",
    resources:{
        en:{
            translation:{
                greeting:"Hello",
                love:"I love My Mother"
            }
        },
        fr:{
            translation:{
                greeting:"Bonjour",
                love:"J'aime ma mère"
            }
        },
        hi:{
            translation:{
                greeting:"नमस्ते",
                love:"मुझे अपनी माँ से प्यार है"
            }
        }
    }
})
