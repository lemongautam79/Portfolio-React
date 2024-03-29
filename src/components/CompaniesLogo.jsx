import React from 'react'
import GDIcon from '../images/projects/Other files/GDIcon.png'
import KankaliTailorsIcon from '../images/projects/Other files/KankaliTailors.png'
import Unarlogo from '../images/projects/Other files/Unarlogo.jpg'
import { useTranslation } from 'react-i18next'

const CompaniesLogo = () => {
    const { t } = useTranslation()
    return (
        <>
            {/* <!-- //! Companies logo --> */}
            <section class="clients section-padding">
                <div class="container">
                    <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" class="row align-items-center">

                        <div class="col-lg-12 col-12">
                            <h3 class="text-center mb-5">{t('companies_work')}</h3>
                        </div>

                        <div class="col-lg-2 col-4 ms-auto clients-item-height">
                            <a href="https://www.newkankalitailors.com.np/" target="_blank">
                                <img src={KankaliTailorsIcon} class="clients-image img-fluid" alt="New Kankali Tailors Logo" loading="lazy" />
                            </a>
                        </div>

                        {/* //! Horizontally centered logo */}
                        <div class="col-lg-2 col-4 mx-auto clients-item-height ">
                            <a href="https://developergd.com/" target="_blank">
                                <img src={GDIcon} class="clients-image img-fluid " alt="GDIcon" loading="lazy" />
                            </a>
                        </div>

                        {/* <div class="col-lg-2 col-4 clients-item-height">
                            <img src="images/clients/tokico.svg" class="clients-image img-fluid" alt="" />
                        </div>

                        <div class="col-lg-2 col-4 clients-item-height">
                            <img src="images/clients/shopify.svg" class="clients-image img-fluid" alt="" />
                        </div> */}

                        {/* <div  class="col-lg-2 col-4 me-auto clients-item-height">
                            <a href="https://unarstore.com/#/" target="_blank">
                                <img src={Unarlogo} class="clients-image img-fluid" alt="Unarlogo" loading="lazy" />
                            </a>
                        </div> */}

                    </div>
                </div>
            </section>
        </>
    )
}

export default CompaniesLogo