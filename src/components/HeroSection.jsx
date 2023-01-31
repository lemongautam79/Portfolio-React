import React from 'react'
import lemoninsta from '../images/projects/Other files/lemoninsta.jpg'
import Lottie from 'react-lottie';
import laptop from '../images/projects/Other files/laptop.json'
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const { t } = useTranslation();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: laptop,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <>
            <section class="hero d-flex justify-content-center align-items-center" id="section_1">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-7 col-12">
                            <div class="hero-text">
                                <div class="hero-title-wrap d-flex align-items-center mb-4">
                                    <img src={lemoninsta} class="avatar-image avatar-image-large img-fluid" alt="avatar" loading="lazy" />

                                    <h1 class="hero-title ms-3 mb-0">{t('welcome')}</h1>
                                </div>

                                <h2 class="mb-4">{t('frontend_gamedev')} </h2>
                                <p class="mb-4"><a class="custom-btn btn custom-link" href="#section_2">{t('lets_begin')}</a></p>
                            </div>
                        </div>

                        {/* //! Hero Image */}
                        <div class="col-lg-5 col-12 position-relative">


                            <div class="hero-image img-fluid">
                                <Lottie options={defaultOptions}
                                    height={550}
                                    width={600}
                                />
                            </div>

                        </div>

                        {/* <!-- //! Hero animation wala --> */}



                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#535da1" fill-opacity="1" d="M0,160L24,160C48,160,96,160,144,138.7C192,117,240,75,288,64C336,53,384,75,432,106.7C480,139,528,181,576,208C624,235,672,245,720,240C768,235,816,213,864,186.7C912,160,960,128,1008,133.3C1056,139,1104,181,1152,202.7C1200,224,1248,224,1296,197.3C1344,171,1392,117,1416,90.7L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
            </section>
        </>
    )
}

export default HeroSection  