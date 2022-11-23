import { getRoles } from '@testing-library/react'
import React from 'react'
import topLaptop from '../images/topLaptop.jpg'
import gore from '../images/projects/teamsimg/gore.png'
import kalesnip from '../images/projects/teamsimg/kalesnip.png'
import manish from '../images/projects/teamsimg/manish.jpg'
import ojhakochoro from '../images/projects/teamsimg/ojhakochoro.jpg'

const MyTeam = () => {
    return (
        <>
            <section class="section-padding" id="section_6">
                <div class="container py-5" >
                    <div class="row text-center text-white">
                        <div class="col-lg-6 col-md-8 col-12">
                            <div class="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                                <img src={topLaptop} class="avatar-image img-fluid" alt="teamsimage" loading="lazy" />
                                <h2 class="text-white ms-4 mb-0">My Team</h2>
                            </div>
                        </div>

                    </div>
                </div>


                <div class="container">
                    <div class="row text-center">

                        {/* <!-- //!  Ayush Gautam --> */}
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4">
                                <img src={gore} alt="Ayush's " width="200" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" loading="lazy" />

                                <a href="https://www.gautamaayush.com.np/" target="_blank">
                                    <h5 class="mb-0">Ayush Gautam</h5>
                                    <span class="small text-uppercase text-muted">Backend Developer</span>
                                </a>

                                {/* <!-- //!Social links --> */}
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item">
                                        <a href="https://www.instagram.com/aayush_gt/?hl=en" class="social-link" target="_blank">
                                            <i class="bi bi-instagram"></i>
                                        </a></li>
                                    <li class="list-inline-item">
                                        <a href="https://twitter.com/G73019507Aayush" class="social-link" target="_blank">
                                            <i class="bi bi-twitter"></i>
                                        </a></li>
                                    <li class="list-inline-item">
                                        <a href="https://www.linkedin.com/in/aayush-gautam-3a7950242/" class="social-link" target="_blank">
                                            <i class="bi bi-linkedin"></i>
                                        </a></li>
                                    <li class="list-inline-item">
                                        <a href="https://www.aayushgautam.com.np/" class="social-link" target="_blank">
                                            <i class="bi bi-globe"></i>
                                        </a></li>
                                </ul>

                            </div>
                        </div>


                        {/* <!-- //! Bibhakta Lamsal --> */}
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4">
                                <img src={kalesnip} alt="kale'simage" width="200" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" loading="lazy" />
                                <a href="https://www.bibhaktalamsal.com.np/" target="_blank">
                                    <h5 class="mb-0">Bibhakta Lamsal</h5><span class="small text-uppercase text-muted">Frontend Developer</span>
                                </a>

                                {/* <!-- //!Social links --> */}
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item">
                                        <a href="https://www.instagram.com/bibhakta.04/?hl=en" class="social-link" target="_blank">
                                            <i class="bi bi-instagram"></i>
                                        </a></li>
                                    <li class="list-inline-item">
                                        <a href="https://twitter.com/bibhakta_lamsal" class="social-link" target="_blank">
                                            <i class="bi bi-twitter"></i>
                                        </a></li>
                                    <li class="list-inline-item">
                                        <a href="https://www.linkedin.com/in/bibhakta-lamsal-7826ab238/" class="social-link" target="_blank">
                                            <i class="bi bi-linkedin"></i>
                                        </a></li>
                                    <li class="list-inline-item">
                                        <a href="https://www.bibhaktalamsal.com.np/" class="social-link" target="_blank">
                                            <i class="bi bi-globe"></i>
                                        </a></li>
                                </ul>

                            </div>
                        </div>


                        {/* <!-- //! Manish Bhattarai --> */}
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4">
                                <img src={manish} alt="Manish's Photo" width="200" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" loading="lazy" />
                                <a href="https://manishbhattarai.ml/" target="_blank">
                                    <h5 class="mb-0">Manish Bhattarai</h5>
                                    <span class="small text-uppercase text-muted">Designer</span>
                                </a>

                                {/* <!-- //!Social links --> */}
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item">
                                        <a href="https://www.instagram.com/manish_bhattarai0/?hl=en" class="social-link" target="_blank">
                                            <i class="bi bi-instagram"></i>
                                        </a></li>
                                    <li class="list-inline-item">
                                        <a href="https://twitter.com/ManishB348" class="social-link" target="_blank">
                                            <i class="bi bi-twitter"></i>
                                        </a></li>
                                    <li class="list-inline-item">
                                        <a href="https://www.linkedin.com/in/manish-bhattarai-335108246/" class="social-link" target="_blank">
                                            <i class="bi bi-linkedin"></i>
                                        </a></li>
                                    <li class="list-inline-item">
                                        <a href="https://dribbble.com/Mr_manish1" class="social-link" target="_blank">
                                            <i class="bi bi-dribbble"></i>
                                        </a></li>
                                    <li class="list-inline-item">
                                        <a href="https://manishbhattarai.ml/" class="social-link" target="_blank">
                                            <i class="bi bi-globe"></i>
                                        </a></li>
                                </ul>

                            </div>
                        </div>


                        {/* <!-- //! Ayush Ojha --> */}
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4">
                                <img src={ojhakochoro} alt="ojha'simage" width="200" height="200" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" loading="lazy" />
                                <a href="https://www.ojhaayush.com.np/" target="_blank">
                                    <h5 class="mb-0">Ayush Ojha</h5><span class="small text-uppercase text-muted">Designer</span>
                                </a>

                                {/* <!-- //!Social links --> */}
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item">
                                        <a href="https://www.instagram.com/ayushojha471/?hl=en" class="social-link" target="_blank">
                                            <i class="bi bi-instagram"></i>
                                        </a></li>

                                    <li class="list-inline-item">
                                        <a href="#" class="social-link" target="_blank">
                                            <i class="bi bi-twitter"></i>
                                        </a></li>
                                    <li class="list-inline-item">
                                        <a href="https://www.linkedin.com/in/ayush-ojha-b98976241/" class="social-link" target="_blank">
                                            <i class="bi bi-linkedin"></i>
                                        </a></li>
                                    <li class="list-inline-item">
                                        <a href="https://www.ojhaayush.com.np/" class="social-link" target="_blank">
                                            <i class="bi bi-globe"></i>
                                        </a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyTeam