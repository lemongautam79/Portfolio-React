import React from 'react'
import Skills from '../components/Skills'
import whiteKey from '../images/whiteKey.jpg'
import Chromedino from '../images/projects/Other files/Chromedino.png'
import FPSGamepic from '../images/projects/Other files/FPSGamepic.png'
import GDdashboard from '../images/projects/Other files/GDdashboard.png'

const Projects = () => {
    return (
        <>
            <section class="projects section-padding" id="section_4">
                <div class="container">
                    <div data-aos="fade-up" data-aos-offset="500" data-aos-duration = "700"  class="row">

                        <div class="col-lg-8 col-md-8 col-12 ms-auto">
                            <div class="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                                <img src={whiteKey} class="avatar-image img-fluid" alt="projectimage" loading="lazy" />

                                <h2 class="text-white ms-4 mb-0">Projects</h2>
                            </div>
                        </div>

                        <div class="clearfix"></div>

                        <div data-aos="fade-up" data-aos-offset="500" data-aos-duration = "700"  class="col-lg-4 col-md-6 col-12">
                            <div class="projects-thumb">
                                <div class="projects-info">
                                    <small class="projects-tag">Game Dev</small>

                                    <h3 class="projects-title">FPS Shooter</h3>
                                </div>

                                <a href={FPSGamepic} class="popup-image">
                                    <img src={FPSGamepic} class="projects-image img-fluid" alt="fpsgameimage" loading="lazy" />
                                </a>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-offset="500" data-aos-duration = "700"  class="col-lg-4 col-md-6 col-12">
                            <div class="projects-thumb">
                                <div class="projects-info">
                                    <small class="projects-tag">Game Dev</small>

                                    <h3 class="projects-title">Chrome Dinosaur</h3>
                                </div>

                                <a href={Chromedino}>
                                    <img src={Chromedino} class="projects-image img-fluid" alt="chromedinosaurimage" loading="lazy" />
                                </a>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-offset="500" data-aos-duration = "700"  class="col-lg-4 col-md-6 col-12">
                            <div class="projects-thumb">
                                <div class="projects-info">
                                    <small class="projects-tag">Web Dev</small>

                                    <h3 class="projects-title">G&D DCR</h3>
                                </div>

                                <a href={GDdashboard} class="popup-image">
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