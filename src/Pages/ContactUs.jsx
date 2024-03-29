import React, { useState } from 'react'
import whiteKey from '../images/whiteKey.jpg'
import { useCreateContactsMutation,useSendMailMutation } from '../api/ContactsSlice'
import { useTranslation } from 'react-i18next'

const ContactUs = () => {
    const { t } = useTranslation()

    // ! GET all createContacts
    // const { data } = useGetAllUsersQuery();
    // console.log(data)

    //! Send mail
    const [sendMail] = useSendMailMutation(); 

    // ! Creating createContacts
    const [createContacts] = useCreateContactsMutation();
    const [ContactData, setContactData] = useState({
        name: '',
        email: '',
        subject: '',
        address: '',
        message: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setContactData({
            ...ContactData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(ContactData);
        createContacts(ContactData);
        sendMail({email:ContactData.email})
        setContactData({
            name: '',
            email: '',
            subject: '',
            address: '',
            message: '',
        })
    };
    return (
        <>

            <section class="contact section-padding" id="section_7">
                <div class="container">
                    <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="row">

                        <div class="col-lg-6 col-md-8 col-12 ms-auto">
                            <div class="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                                <img src={whiteKey} class="avatar-image img-fluid" alt="contactimage" loading="lazy" />

                                <h2 class="text-white ms-4 mb-0">{t('contact')}</h2>
                            </div>
                        </div>

                        <div class="clearfix"></div>

                        <div class="col-lg-3 col-md-6 col-12 pe-lg-0">
                            <div class="contact-info contact-info-border-start d-flex flex-column">
                                <strong class="site-footer-title d-block mb-3">{t('services')}</strong>

                                <ul class="footer-menu">
                                    <li class="footer-menu-item"><a href="#" class="footer-menu-link">{t('websites')}</a></li>

                                    <li class="footer-menu-item"><a href="#" class="footer-menu-link">{t('game_dev')}</a></li>

                                    <li class="footer-menu-item"><a href="#" class="footer-menu-link">{t('ecommerce')}</a></li>

                                    <li class="footer-menu-item"><a href="#" class="footer-menu-link">{t('seo')}</a></li>
                                </ul>

                                {/* <!-- //! Stay Connected --> */}
                                <strong class="site-footer-title d-block mt-4 mb-3">{t('stay_connected')}</strong>

                                <ul class="social-icon">
                                    <li class="social-icon-item"><a href="https://twitter.com/Lemongautam79" target="_blank" class="social-icon-link bi-twitter"></a></li>

                                    <li class="social-icon-item">
                                        <a href="https://www.instagram.com/lemangautam/?hl=en" target="_blank" class="social-icon-link bi-instagram"></a>
                                    </li>

                                    <li class="social-icon-item"><a href="https://www.linkedin.com/in/lemon-gautam-223439203/" target="_blank" class="social-icon-link bi-linkedin"></a></li>

                                    <li class="social-icon-item">
                                        <a href="https://www.facebook.com/aazin.gautam.7" target="_blank"
                                            class="social-icon-link bi-facebook">
                                        </a>
                                    </li>

                                    <li class="social-icon-item">
                                        <a href="https://github.com/lemongautam79"
                                            target="_blank"
                                            class="social-icon-link bi-github">
                                        </a></li>
                                </ul>

                                <strong class="site-footer-title d-block mt-4 mb-3">{t('start_project')}</strong>

                                <p class="mb-0">{t('start_desc')}</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-12 ps-lg-0">
                            <div class="contact-info d-flex flex-column">
                                <strong class="site-footer-title d-block mb-3">{t('about')}</strong>

                                <p class="mb-2">
                                    {t('about_desc')}
                                </p>

                                <strong class="site-footer-title d-block mt-4 mb-3">{t('Email')}</strong>

                                <p>
                                    <a href="mailto:portfoliolemon79@gmail.com">
                                        portfoliolemon79@gmail.com
                                    </a>
                                </p>

                                {/* <strong class="site-footer-title d-block mt-4 mb-3">{t('call')}</strong>

                                <p class="mb-0">
                                    <a href="tel: +9779861000213">
                                        {t('actual_phone_ntc')}
                                    </a>
                                </p>
                                <p class="mb-0">
                                    <a href="tel: +9779818310190">
                                        {t('actual_phone_ncell')}
                                    </a>
                                </p> */}
                            </div>
                        </div>


                        {/* <!-- //! Contact Us form --> */}
                        <div class="col-lg-6 col-12 mt-5 mt-lg-0">

                            <form class="custom-form contact-form" role="form" name="form">
                                <div class="row">

                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="form-floating">
                                            <input
                                                type="text"
                                                name="name"
                                                value={ContactData.name}
                                                onChange={handleInputChange}
                                                id="name"
                                                class="form-control"
                                                placeholder="Name"
                                                required
                                                autoComplete='off'
                                            // value={registerUsers.name}
                                            // onChange={onRegisterUsers}
                                            />

                                            <label for="floatingInput">{t('name')}</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="form-floating">
                                            <input
                                                type="email"
                                                name="email"
                                                value={ContactData.email}
                                                onChange={handleInputChange}
                                                id="email"
                                                pattern="[^ @]*@[^ @]*"
                                                class="form-control"
                                                placeholder="someone@gmail.com"
                                                required
                                                autoComplete='off'
                                            // value={registerUsers.email}
                                            // onChange={onRegisterUsers}
                                            />

                                            <label for="floatingInput">{t('email_add')}</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="form-floating">
                                            <input
                                                type="text"
                                                name="address"
                                                value={ContactData.address}
                                                onChange={handleInputChange}
                                                id="name"
                                                class="form-control"
                                                placeholder="Address"
                                                autoComplete='off'
                                            // value={registerUsers.name}
                                            // onChange={onRegisterUsers}
                                            />

                                            <label for="floatingInput">{t('address')}</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="form-floating">
                                            <input
                                                type="text"
                                                name="subject"
                                                value={ContactData.subject}
                                                onChange={handleInputChange}
                                                id="name"
                                                class="form-control"
                                                placeholder="Address"
                                                autoComplete='off'
                                            // value={registerUsers.name}
                                            // onChange={onRegisterUsers}
                                            />

                                            <label for="floatingInput">{t('subject')}</label>
                                        </div>
                                    </div>


                                    {/* <div class="col-lg-3 col-md-6 col-6">
                                        <div class="form-check form-check-inline">
                                            <input
                                                name="websites"
                                                type="checkbox"
                                                class="form-check-input"
                                                id="inlineCheckbox1"
                                                value={registerUsers.websites}
                                                onChange={onRegisterUsers}
                                            />

                                            <label class="form-check-label" for="inlineCheckbox1">
                                                <i class="bi-globe form-check-icon"></i>
                                                <span class="form-check-label-text">Websites</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-md-6 col-6">
                                        <div class="form-check form-check-inline">
                                            <input
                                                name="gamedev"
                                                type="checkbox"
                                                class="form-check-input"
                                                id="inlineCheckbox2"
                                                value={registerUsers.gamedev}
                                                onChange={onRegisterUsers}

                                            />

                                            <label class="form-check-label" for="inlineCheckbox2">
                                                <i class="bi-controller form-check-icon"></i>
                                                <span class="form-check-label-text">Game Dev</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-md-6 col-6">
                                        <div class="form-check form-check-inline">
                                            <input
                                                name="ecommerce"
                                                type="checkbox"
                                                class="form-check-input"
                                                id="inlineCheckbox3"
                                                value={registerUsers.ecommerce}
                                                onChange={onRegisterUsers}

                                            />

                                            <label class="form-check-label" for="inlineCheckbox3">
                                                <i class="bi-phone form-check-icon"></i>
                                                <span class="form-check-label-text">Ecommerce</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-md-6 col-6">
                                        <div class="form-check form-check-inline me-0">
                                            <input
                                                name="seo"
                                                type="checkbox"
                                                class="form-check-input"
                                                id="inlineCheckbox4"
                                                value={registerUsers.seo}
                                                onChange={onRegisterUsers}

                                            />

                                            <label class="form-check-label" for="inlineCheckbox4">
                                                <i class="bi-google form-check-icon"></i>
                                                <span class="form-check-label-text">SEO</span>
                                            </label>
                                        </div>
                                    </div> */}

                                    <div class="col-lg-12 col-12">
                                        <div class="form-floating">
                                            <textarea
                                                type="text"
                                                name="message"
                                                value={ContactData.message}
                                                onChange={handleInputChange}
                                                id="name"
                                                class="form-control"
                                                placeholder="Tell me about the project"
                                                required
                                            // value={registerUsers.messages}
                                            // onChange={onRegisterUsers}
                                            >
                                            </textarea>

                                            <label for="floatingTextarea">{t('tell_project')}</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-12 ms-auto">
                                        <button
                                            type="submit"
                                            value="submit"
                                            class="form-control"
                                            id="sub"

                                            onClick={(e) => { handleSubmit(e) }}
                                        >
                                            {t('submit')}
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs