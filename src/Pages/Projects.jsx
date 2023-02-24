import React from 'react'
import Skills from '../components/Skills'
import whiteKey from '../images/whiteKey.jpg'
import Chromedino from '../images/projects/Other files/Chromedino.png'
import FPSGamepic from '../images/projects/Other files/FPSGamepicWebp.webp'
import GDdashboard from '../images/projects/Other files/GDdashboardWebp.webp'
import { useTranslation } from 'react-i18next'

const Projects = () => {
    const { t } = useTranslation()

    return (
        <>
            <section class="projects section-padding" id="section_4">
                <div class="container">
                    <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="row">

                        <div class="col-lg-8 col-md-8 col-12 ms-auto">
                            <div class="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                                <img src={whiteKey} class="avatar-image img-fluid" alt="projectimage" loading="lazy" />

                                <h2 class="text-white ms-4 mb-0">{t('projects')}</h2>
                            </div>
                        </div>

                        <div class="clearfix"></div>

                        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="col-lg-4 col-md-6 col-12">
                            <div class="projects-thumb">
                                <div class="projects-info">
                                    <small class="projects-tag">{t('game_dev')}</small>

                                    <h3 class="projects-title">{t('FPS_shooter')}</h3>
                                </div>

                                {/* <a href={FPSGamepic} class="popup-image">
                                    <img src={FPSGamepic} class="projects-image img-fluid" alt="fpsgameimage" loading="lazy" />
                                </a> */}

                                <a href={"https://drive.google.com/uc?export=download&id=1pktEHiEAPxun279OzTne7Agmfe2_PtSj"} class="popup-image" target="_blank">
                                    <img src={FPSGamepic} class="projects-image img-fluid" alt="fpsgameimage" loading="lazy" />
                                </a>

                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="col-lg-4 col-md-6 col-12">
                            <div class="projects-thumb">
                                <div class="projects-info">
                                    <small class="projects-tag">{t('game_dev')}</small>

                                    <h3 class="projects-title">{t('Chrome_dino')}</h3>
                                </div>

                                <a href={"https://drive.google.com/uc?export=download&id=1pO0i81s1dHdFH84V5xoCPeaolRoXrCj6"} class="popup-image" target="_blank">
                                    <img src={Chromedino} class="projects-image img-fluid" alt="chromedinosaurimage" loading="lazy" />
                                </a>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="col-lg-4 col-md-6 col-12">
                            <div class="projects-thumb">
                                <div class="projects-info">
                                    <small class="projects-tag">{t('web_dev')}</small>

                                    <h3 class="projects-title">G&D DCR</h3>
                                </div>

                                <a class="popup-image">
                                    <img src={GDdashboard} class="projects-image img-fluid" alt="GDdashboardimage" loading="lazy" />
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <Skills />
        </>
    )
}

export default Projects