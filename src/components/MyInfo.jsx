import React from 'react'
import CountUp from 'react-countup'
import { useTranslation } from 'react-i18next'

const MyInfo = () => {
    const { t } = useTranslation()
    return (
        <>
            {/* <!-- //! Information --> */}
            <section class="featured section-padding">
                <div class="container">
                    <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" class="row">

                        <div class="col-lg-6 col-12">
                            <div class="profile-thumb">
                                <div class="profile-title">
                                    <h4 class="mb-0">{t('info')}</h4>
                                </div>

                                <div class="profile-body">
                                    <p>
                                        <span class="profile-small-title">{t('name')}</span>
                                        <span>{t('actual_name')}</span>
                                    </p>

                                    <p>
                                        <span class="profile-small-title">{t('dob')}</span>
                                        <span>{t('date')}</span>
                                    </p>

                                    <p>
                                        <span class="profile-small-title">{t('Email')}</span>
                                        <span><a href="mailto:azulgautam@gmail.com.design">azulgautam79@gmail.com</a></span>
                                    </p>

                                    <p>
                                        <span class="profile-small-title">{t('address')}</span>
                                        <span><a>{t('actual_address')}</a></span>
                                    </p>

                                    <p>
                                        <span class="profile-small-title">{t('phone')}</span>
                                        <span>
                                            <a href="tel: +9779861000213">{t('actual_phone_ntc')},</a></span>
                                        <span>
                                            <a href="tel: +9779818310190"> {t('actual_phone_ncell')}</a></span>
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-12 mt-5 mt-lg-0">
                            <div class="about-thumb">
                                <div class="row">
                                    <div class="col-lg-6 col-6 featured-border-bottom py-2">
                                        <strong className="featured-numbers">
                                            <CountUp
                                                end={2}
                                            />
                                        </strong>

                                        <p class="featured-text">{t('exp')}</p>
                                    </div>

                                    <div class="col-lg-6 col-6 featured-border-start featured-border-bottom ps-5 py-2">

                                        <strong className="featured-numbers">
                                            <CountUp
                                                end={7}
                                                duration={3}
                                            />+
                                        </strong>

                                        <p class="featured-text">{t('skills_no')}</p>
                                    </div>

                                    <div class="col-lg-6 col-6 pt-4">
                                        <strong className="featured-numbers">
                                            <CountUp
                                                end={5}
                                                duration={3}

                                            />
                                        </strong>

                                        <p class="featured-text">{t('projects_finished')}</p>
                                    </div>

                                    <div class="col-lg-6 col-6 featured-border-start ps-5 pt-4">
                                        <strong className="featured-numbers">
                                            <CountUp
                                                end={2}
                                            />
                                        </strong>

                                        <p class="featured-text">{t('certificates')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MyInfo