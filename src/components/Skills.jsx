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
                            <a href="https://unity.com/" target="_blank">
                                <img src="https://img.icons8.com/ios-filled/150/null/unity.png" class="clients-image img-fluid" alt="unityimage" loading="lazy" />
                            </a>
                        </div>

                        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="col-lg-2 col-4 me-auto clients-item-height">
                            <a href="https://www.blender.org/" target="_blank">
                                <img src="https://img.icons8.com/color/150/null/blender-3d.png" class="clients-image img-fluid" alt="blenderimage" loading="lazy" />
                            </a>
                        </div>

                    </div>

                    {/* <!--! Flexwala firebase ko --> */}
                    <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="flexwala">
                        <div class="col-lg-2 col-4 clients-item-height">
                            <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank">
                                <img src="https://img.icons8.com/color/144/null/c-programming.png" class="clients-image img-fluid" alt="c" loading="lazy" />
                            </a>
                        </div>

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