import React from 'react'
import handshake from '../images/handshake.jpg'

const Services = () => {
    return (
        <>
            {/* <!-- //! Services wala with cards  --> */}
            <section class="services section-padding" id="section_3">
                <div class="container">
                    <div  data-aos="fade-up" data-aos-offset="500" data-aos-duration = "700"  class="row">

                        <div class="col-lg-10 col-12 mx-auto">
                            <div class="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                                <img src={handshake} class="avatar-image img-fluid" alt="servicesimage" loading="lazy" />

                                <h2 class="text-white ms-4 mb-0">Services</h2>
                            </div>

                            <div class="row pt-lg-5">

                                {/* <!-- //! Websites --> */}
                                <div  data-aos="fade-up" data-aos-offset="500" data-aos-duration = "700"  class="col-lg-6 col-12">
                                    <div class="services-thumb">
                                        <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                            <h3 class="mb-0">Websites</h3>
                                        </div>

                                        <p>If you need a customized ecommerce website for your business, feel free to discuss with me.</p>
                                        <a href="#" class="custom-btn custom-border-btn btn mt-3">Discover More</a>

                                        <div class="services-icon-wrap d-flex justify-content-center align-items-center">
                                            <i class="services-icon bi-globe"></i>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- //!Game Dev --> */}

                                <div  data-aos="fade-up" data-aos-offset="500" data-aos-duration = "700"  class="col-lg-6 col-12">
                                    <div class="services-thumb services-thumb-up">
                                        <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                            <h3 class="mb-0">Game Dev</h3>
                                        </div>

                                        <p>2D and 3D games created using Unity</p>

                                        <a href="#" class="custom-btn custom-border-btn btn mt-3">Discover More</a>

                                        <div class="services-icon-wrap d-flex justify-content-center align-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="currentColor" class="bi bi-unity" viewBox="0 0 16 16">
                                                <path d="M15 11.2V3.733L8.61 0v2.867l2.503 1.466c.099.067.099.2 0 .234L8.148 6.3c-.099.067-.197.033-.263 0L4.92 4.567c-.099-.034-.099-.2 0-.234l2.504-1.466V0L1 3.733V11.2v-.033.033l2.438-1.433V6.833c0-.1.131-.166.197-.133L6.6 8.433c.099.067.132.134.132.234v3.466c0 .1-.132.167-.198.134L4.031 10.8l-2.438 1.433L7.983 16l6.391-3.733-2.438-1.434L9.434 12.3c-.099.067-.198 0-.198-.133V8.7c0-.1.066-.2.132-.233l2.965-1.734c.099-.066.197 0 .197.134V9.8L15 11.2Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- //!Ecommerce --> */}

                                <div  data-aos="fade-up" data-aos-offset="500" data-aos-duration = "700"  class="col-lg-6 col-12">
                                    <div class="services-thumb">
                                        <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                            <h3 class="mb-0">E-commerce</h3>

                                        </div>

                                        <p>If you need a customized ecommerce website for your business, feel free to discuss with me.</p>

                                        <a href="#" class="custom-btn custom-border-btn btn mt-3">Discover More</a>

                                        <div class="services-icon-wrap d-flex justify-content-center align-items-center">
                                            <i class="services-icon bi-phone"></i>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- //! SEO --> */}
                                <div data-aos="fade-up" data-aos-offset="500" data-aos-duration = "700"  class="col-lg-6 col-12">
                                    <div class="services-thumb services-thumb-up">
                                        <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                            <h3 class="mb-0">SEO</h3>

                                        </div>

                                        <p>If you need to optimize your website search position for your business, feel free to discuss with me.</p>

                                        <a href="#" class="custom-btn custom-border-btn btn mt-3">Discover More</a>

                                        <div class="services-icon-wrap d-flex justify-content-center align-items-center">
                                            <i class="services-icon bi-google"></i>
                                        </div>
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

export default Services