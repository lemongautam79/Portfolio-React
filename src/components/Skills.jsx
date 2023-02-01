import React from 'react'
import reactlogo from '../images/projects/Other files/reactlogo.png'
import { useTranslation } from 'react-i18next'

const Skills = () => {
    const {t} = useTranslation()
    return (
        <>
            <section class="clients" id=" section_5">
                <div class="container">
                    <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="row align-items-center ">

                        <div class="col-lg-12 col-12">
                            <h3 class="text-center mb-5">{t('skills')}</h3>
                        </div>

                        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="col-lg-2 col-4 ms-auto clients-item-height">
                            <img src="https://img.icons8.com/color/240/null/javascript--v1.png" class="clients-image img-fluid" alt="jsimage" loading="lazy" />
                        </div>

                        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="col-lg-2 col-4 clients-item-height">
                            <img src={reactlogo} class="clients-image img-fluid" alt="reactimage" loading="lazy" />
                        </div>

                        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="col-lg-2 col-4 clients-item-height">
                            <img src="https://img.icons8.com/color/144/null/redux.png" class="clients-image img-fluid" alt="reduximage" loading="lazy" />
                        </div>

                        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="col-lg-2 col-4 clients-item-height">
                            <img src="https://img.icons8.com/color/144/null/git.png" class="clients-image img-fluid" alt="gitlogo" loading="lazy" />
                        </div>
                        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="col-lg-2 col-4 clients-item-height">
                            <img src="https://img.icons8.com/ios-filled/150/null/unity.png" class="clients-image img-fluid" alt="unityimage" loading="lazy" />
                        </div>

                        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="col-lg-2 col-4 me-auto clients-item-height">
                            <img src="https://img.icons8.com/color/150/null/blender-3d.png" class="clients-image img-fluid" alt="blenderimage" loading="lazy" />
                        </div>

                    </div>

                    {/* <!--! Flexwala firebase ko --> */}
                    {/* <!-- <div class="flexwala">
                            <div class="col-lg-2 col-4 clients-item-height">
                                <img src="https://img.icons8.com/color/144/null/firebase.png" class="clients-image img-fluid" alt="firebase" loading="lazy">
                            </div>
                        </div>        --> */}

                </div>
            </section>
        </>
    )
}

export default Skills