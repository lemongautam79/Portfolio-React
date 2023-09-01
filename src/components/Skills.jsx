import React from 'react'
import reactlogo from '../images/projects/Other files/reactlogo.png'
import { useTranslation } from 'react-i18next'

const Skills = () => {
    const { t } = useTranslation()
    return (
        <>
            <section class="clients" id=" section_5">
                <div class="container">
                    <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="row align-items-center ">

                        <div class="col-lg-12 col-12">
                            <h3 class="text-center mb-5">{t('skills')}</h3>
                        </div>

                        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="col-lg-2 col-4 ms-auto clients-item-height">
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                                <img src="https://img.icons8.com/color/240/null/javascript--v1.png" class="clients-image img-fluid" alt="jsimage" loading="lazy" />
                            </a>
                        </div>

                        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="col-lg-2 col-4 clients-item-height">
                            <a href="https://reactjs.org/" target="_blank">
                                <img src={reactlogo} class="clients-image img-fluid" alt="reactimage" loading="lazy" />
                            </a>
                        </div>

                        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="col-lg-2 col-4 clients-item-height">
                            <a href="https://redux-toolkit.js.org/" target="_blank">
                                <img src="https://img.icons8.com/color/144/null/redux.png" class="clients-image img-fluid" alt="reduximage" loading="lazy" />
                            </a>
                        </div>

                        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="col-lg-2 col-4 clients-item-height">
                            <a href="https://git-scm.com/" target="_blank">
                                <img src="https://img.icons8.com/color/144/null/git.png" class="clients-image img-fluid" alt="gitlogo" loading="lazy" />
                            </a>
                        </div>
                        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="col-lg-2 col-4 clients-item-height">
                            <a href="https://nodejs.org " target="_blank">
                                <img src="https://img.icons8.com/color/144/null/nodejs.png" class="clients-image img-fluid" alt="nodeimage" loading="lazy" />
                            </a>
                        </div>

                        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="col-lg-2 col-4 me-auto clients-item-height">
                            <a href="https://www.mongodb.com" target="_blank">
                                <img src="data:image/png;base64,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" class="clients-image img-fluid" alt="mongodb" loading="lazy" />
                            </a>
                        </div>

                    </div>

                    {/* <!--! Flexwala firebase ko --> */}
                    <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="flexwala">
                        {/* <div class="col-lg-2 col-4 clients-item-height">
                            <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank">
                                <img src="https://img.icons8.com/color/144/null/c-programming.png" class="clients-image img-fluid" alt="c" loading="lazy" />
                            </a>
                        </div> */}

                        <div class="col-lg-2 col-4 clients-item-height">
                            <a href="https://firebase.google.com/" target="_blank">
                                <img src="https://img.icons8.com/color/144/null/firebase.png" class="clients-image img-fluid" alt="firebase" loading="lazy" />
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Skills