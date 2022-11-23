import React from 'react'
import GDIcon from '../images/projects/Other files/GDIcon.png'
import Unarlogo from '../images/projects/Other files/Unarlogo.jpg'

const CompaniesLogo = () => {
    return (
        <>
            {/* <!-- //! Companies logo --> */}
            <section class="clients section-padding">
                <div class="container">
                    <div class="row align-items-center">

                        <div class="col-lg-12 col-12">
                            <h3 class="text-center mb-5">Companies I've had worked</h3>
                        </div>

                        <div class="col-lg-2 col-4 ms-auto clients-item-height">
                            <a href="https://developergd.com/" target="_blank">
                                <img src={GDIcon} class="clients-image img-fluid" alt="GDIcon" loading="lazy" />
                            </a>
                        </div>

                        {/* <!-- <div class="col-lg-2 col-4 clients-item-height">
                            <img src="images/clients/guitar-center.svg" class="clients-image img-fluid" alt="">
                        </div>

                        <div class="col-lg-2 col-4 clients-item-height">
                            <img src="images/clients/tokico.svg" class="clients-image img-fluid" alt="">
                        </div>

                        <div class="col-lg-2 col-4 clients-item-height">
                            <img src="images/clients/shopify.svg" class="clients-image img-fluid" alt="">
                        </div> --> */}

                        <div class="col-lg-2 col-4 me-auto clients-item-height">
                            <a href="https://unarstore.com/#/" target="_blank">
                                <img src={Unarlogo} class="clients-image img-fluid" alt="Unarlogo" loading="lazy" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CompaniesLogo