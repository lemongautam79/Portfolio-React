import React from 'react'
import CountUp from 'react-countup'

const MyInfo = () => {
    return (
        <>
            {/* <!-- //! Information --> */}
            <section class="featured section-padding">
                <div class="container">
                    <div   data-aos="fade-up" data-aos-offset="200" data-aos-duration = "600" class="row">

                        <div  class="col-lg-6 col-12">
                            <div  class="profile-thumb">
                                <div class="profile-title">
                                    <h4 class="mb-0">Information</h4>
                                </div>

                                <div class="profile-body">
                                    <p>
                                        <span class="profile-small-title">Name</span>
                                        <span>Lemon Gautam</span>
                                    </p>

                                    <p>
                                        <span class="profile-small-title">DOB</span>
                                        <span>May 21, 2003</span>
                                    </p>

                                    <p>
                                        <span class="profile-small-title">Email</span>
                                        <span><a href="mailto:azulgautam@gmail.com.design">azulgautam79@gmail.com</a></span>
                                    </p>

                                    <p>
                                        <span class="profile-small-title">Address</span>
                                        <span><a href="#">Chandragiri-13, KTM</a></span>
                                    </p>

                                    <p>
                                        <span class="profile-small-title">Phone</span>
                                        <span>
                                        <a href="tel: 9861000213">9861000213,</a></span>
                                        <span>
                                        <a href="tel: 9818310190"> 9818310190</a></span>
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

                                        <p class="featured-text">Years of Experiences</p>
                                    </div>

                                    <div class="col-lg-6 col-6 featured-border-start featured-border-bottom ps-5 py-2">

                                        <strong className="featured-numbers">
                                            <CountUp
                                                end={7}
                                                duration={3}
                                            />+
                                        </strong>

                                        <p class="featured-text">No. of skills</p>
                                    </div>

                                    <div class="col-lg-6 col-6 pt-4">
                                        <strong className="featured-numbers">
                                            <CountUp
                                                end={5}
                                                duration={3}

                                            />
                                        </strong>

                                        <p class="featured-text">Projects Finished</p>
                                    </div>

                                    <div class="col-lg-6 col-6 featured-border-start ps-5 pt-4">
                                        <strong className="featured-numbers">
                                            <CountUp
                                                end={2}
                                            />
                                        </strong>

                                        <p class="featured-text">Certificates</p>
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