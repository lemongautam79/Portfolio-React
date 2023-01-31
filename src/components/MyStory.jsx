import React from 'react'
import Lottie from 'react-lottie';
import lemondev from '../images/projects/Other files/lemondev.json'
import lemoninsta from '../images/projects/Other files/lemoninsta.jpg'
import { useTranslation } from 'react-i18next';

const MyStory = () => {
    const { t } = useTranslation();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lemondev,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <>
            <section class="about section-padding" id="section_2">
                <div class="container">
                    <div class="row">

                        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" class="col-lg-6 col-12">
                            {/* <!-- <img src="images/couple-working-from-home-together-sofa.jpg" class="about-image img-fluid" alt=""/> --> */}
                            {/* <!-- //! MyStory wala animation wala --> */}

                            <div class="col-lg-5 col-12 position-relative programmer-typing">
                                {/* <div class='hero-image img-fluid'> */}
                                <Lottie options={defaultOptions}
                                    height={400}
                                    width={600}
                                />
                                {/* </div> */}
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" class="col-lg-6 col-12 mt-5 mt-lg-0">
                            <div class="about-thumb">

                                <div class="section-title-wrap d-flex justify-content-end align-items-center mb-4">
                                    <h2 class="text-white me-4 mb-0">
                                        {t('my_story')}
                                    </h2>

                                    <img src={lemoninsta} class="avatar-image img-fluid" alt="mystory_image" loading="lazy" />
                                </div>

                                <h3 class="pt-2 mb-3">{t('intro')}</h3>

                                <p>{t('intro_desc')}</p>

                                <p></p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MyStory