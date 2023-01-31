import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavLogo from '../images/projects/favicon_io1/NavLogo.png'
import LGresume from '../images/projects/Other files/LGresume.pdf'
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import translate_en from '../locales/en/translation.json'
import translate_es from '../locales/es/translation.json'
import translate_ne from '../locales/ne/translation.json'

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: translate_en,
            },
            es: {
                translation: translate_es,
            },
            ne: {
                translation: translate_ne,
            },
        },
        lng: 'en', // if you're using a language detector, do not define the lng option
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
    });
const Navbar = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState(localStorage.getItem('lang'))

    const handleChange = (event) => {
        setValue(event.target.value);

        // return () => {
        //     i18n.changeLanguage(value);
        //     localStorage.setItem('lang', value);
        // }
    }
    useEffect(() => {
        // console.log(value)
        i18n.changeLanguage(value);
        localStorage.setItem('lang', value);
    }, [value])

    useEffect(() => {
        let currentLang = localStorage.getItem('lang');
        i18n.changeLanguage(currentLang);
    }, []);

    return (
        <>
            {/*//! Navbar */}
            <nav class="navbar navbar-expand-lg">
                <div class="container">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <Link to="/" class="navbar-brand mx-auto mx-lg-0">
                        <img src={NavLogo} alt="Navbar logo stating Lemon's initials" height="60" width="60" loading="lazy" /></Link>

                    <div class="d-flex align-items-center d-lg-none">
                        <a class="custom-btn btn" href={LGresume} download="lemon's resume">
                            {t('resume')}
                        </a>
                    </div>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-lg-5">
                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_1">{t('home')}</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_2">{t('about_nav')}</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_3">{t('services_nav')}</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_4">{t('projects_nav')}</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_5">{t('skills_nav')}</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_6">{t('myteams_nav')}</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_7">{t('contact_nav')}</a>
                            </li>
                        </ul>

                        <div class="d-lg-flex align-items-center d-none ms-auto">
                            {/* <i class="navbar-icon bi-telephone-plus me-3"></i> */}
                            <a class="custom-btn btn" href={LGresume} download="lemon's resume">
                                {t('resume')}
                            </a>

                            <div className="dropdown">
                                <div class="dropbtn">
                                    <select
                                        value={value}
                                        onChange={handleChange}
                                        name="">
                                        <option value='en'>En</option>
                                        <option value='ne'>नेपा</option>
                                        <option value='es'>Es</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;