import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()
    const date = new Date();
    const year = date.getFullYear();
    return (
        <>
            <footer class="site-footer">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 col-12">
                            <div class="copyright-text-wrap">
                                <p class="mb-0">
                                    <span class="copyright-text">{t('copyright') + year + t('remaining_text')}</span>
                                    <a rel="sponsored" href="/" target="_blank">{t('full_name')}</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer