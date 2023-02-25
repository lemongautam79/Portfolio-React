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
            En: {
                translation: translate_en,
            },
            Es: {
                translation: translate_es,
            },
            Ne: {
                translation: translate_ne,
            },
        },
        // lng: 'En', // if you're using a language detector, do not define the lng option
        fallbackLng: 'En',

        interpolation: {
            escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
    });

const Navbar = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState(localStorage.getItem('lang'))
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const storage = localStorage.getItem('lang');


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
        // console.log(localStorage.getItem('lang').length)
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

                    <div class="d-flex align-items-center d-lg-none">
                        {/* <div className="dropdown"> */}
                        {/* <div class="dropbtn"> */}
                        <select
                            className="custom-btn btn"
                            style={{ "marginLeft": "10px", "borderRadius": "none", "webkitAppearance": "none" }}
                            value={value}
                            onChange={handleChange}
                            name="">
                            <option value='En'>En</option>
                            <option value='Ne'>नेपा</option>
                            <option value='Es'>Es</option>
                        </select>
                        {/* </div> */}
                        {/* </div> */}
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
                            <a class="custom-btn btn" style={{}} href={LGresume} download="lemon's resume">
                                {t('resume')}
                            </a>

                            {/* <h4 class="custom-btn btn" >{value}</h4> */}

                            <div className="dropdown">
                                <div class="dropbtn">
                                    <select
                                        className="custom-btn btn selectwala"
                                        style={{ "webkitAppearance": "none" }}
                                        value={value}
                                        onChange={handleChange}
                                        name="">
                                        <option value='En'>En</option>
                                        <option value='Ne'>नेपा</option>
                                        <option value='Es'>Es</option>
                                    </select>
                                </div>
                            </div>

                            {/* <nav className='navTrans'>
                                <ul className='ulTrans'>
                                    <li className='liTrans'
                                        onMouseEnter={() => setIsDropdownOpen(true)}
                                        onMouseLeave={() => setIsDropdownOpen(false)}
                                    >
                                        {value}
                                        {isDropdownOpen && (
                                            <ul className="dropdown-menu">
                                                <li className='liTrans' onClick={() => handleChange('en')}>En</li>
                                                <li className='liTrans' onClick={() => handleChange('es')}>Es</li>
                                                <li className='liTrans' onClick={() => handleChange('ne')}>Ne</li>
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            </nav> */}

                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;