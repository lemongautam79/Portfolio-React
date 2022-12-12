import React, { useState } from 'react'
import whiteKey from '../images/whiteKey.jpg'
import { useCreateUsersMutation, useGetAllUsersQuery } from '../api/RTK Query/PortfolioApiSlice'

const ContactUs = () => {
// {
//     const form = document.getElementById('form');

//     form.addEventListener('submit', function handleClick(event) {
//         event.preventDefault();
//         // const textareaInput = document.getElementById('message');
//         // console.log(textareaInput.value);
//         // textareaInput.value = '';
//         form.reset()
//     });

// }

    // ! GET all users
    const { data } = useGetAllUsersQuery();
    // console.log(data)

    // ! Creating users
    const [users] = useCreateUsersMutation();
    const [registerUsers, setRegisterUsers] = useState("")

    const onRegisterUsers = (e) => {
        setRegisterUsers(registerUsers => {
            return {
                ...registerUsers,
                [e.target.name]: e.target.value,
            }
        })
        // console.log(registerUsers)
    }

    const PortfolioUsers = (e) => {
        e.preventDefault()
        users(registerUsers)
        setRegisterUsers({
            "name": "",
            "email": "",
            "messages": "",
            "websites": "",
            "gamedev": "",
            "seo": "",
            "ecommerce": ""

        })
        alert("Info submitted")
    }
    return (
        <>
        
            <section class="contact section-padding" id="section_7">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-md-8 col-12 ms-auto">
                            <div class="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                                <img src={whiteKey} class="avatar-image img-fluid" alt="contactimage" loading="lazy" />

                                <h2 class="text-white ms-4 mb-0">Contact Me</h2>
                            </div>
                        </div>

                        <div class="clearfix"></div>

                        <div class="col-lg-3 col-md-6 col-12 pe-lg-0">
                            <div class="contact-info contact-info-border-start d-flex flex-column">
                                <strong class="site-footer-title d-block mb-3">Services</strong>

                                <ul class="footer-menu">
                                    <li class="footer-menu-item"><a href="#" class="footer-menu-link">Websites</a></li>

                                    <li class="footer-menu-item"><a href="#" class="footer-menu-link">Game Dev</a></li>

                                    <li class="footer-menu-item"><a href="#" class="footer-menu-link">Ecommerce</a></li>

                                    <li class="footer-menu-item"><a href="#" class="footer-menu-link">SEO</a></li>
                                </ul>

                                {/* <!-- //! Stay Connected --> */}
                                <strong class="site-footer-title d-block mt-4 mb-3">Stay connected</strong>

                                <ul class="social-icon">
                                    <li class="social-icon-item"><a href="https://twitter.com/Lemongautam79" target="_blank" class="social-icon-link bi-twitter"></a></li>

                                    <li class="social-icon-item">
                                        <a href="https://www.instagram.com/lemangautam/?hl=en" target="_blank" class="social-icon-link bi-instagram"></a>
                                    </li>

                                    <li class="social-icon-item"><a href="https://www.linkedin.com/in/lemon-gautam-223439203/" target="_blank" class="social-icon-link bi-linkedin"></a></li>

                                    <li class="social-icon-item">
                                        <a href="https://www.facebook.com/aazin.gautam.7" target="_blank"
                                            class="social-icon-link bi-facebook">
                                        </a>
                                    </li>

                                    <li class="social-icon-item">
                                        <a href="https://github.com/lemongautam79"
                                            target="_blank"
                                            class="social-icon-link bi-github">
                                        </a></li>
                                </ul>

                                <strong class="site-footer-title d-block mt-4 mb-3">Start a project</strong>

                                <p class="mb-0">I’m available for freelance projects</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-12 ps-lg-0">
                            <div class="contact-info d-flex flex-column">
                                <strong class="site-footer-title d-block mb-3">About</strong>

                                <p class="mb-2">
                                    Lemon is a professional game & web developer. Feel free to get in touch with me.
                                </p>

                                <strong class="site-footer-title d-block mt-4 mb-3">Email</strong>

                                <p>
                                    <a href="mailto:azulgautam79@gmail.com">
                                        azulgautam79@gmail.com
                                    </a>
                                </p>

                                <strong class="site-footer-title d-block mt-4 mb-3">Call</strong>

                                <p class="mb-0">
                                    <a href="tel: +9779861000213">
                                        9861000213
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* https://getform.io/f/47b01bd9-a75d-49e8-98e2-50d8584a5cf2                   Get form*/}
                        {/* https://formspree.io/f/xrgdnjjy                                           formspree */}

                        {/* <!-- //! Contact Us form --> */}
                        <div class="col-lg-6 col-12 mt-5 mt-lg-0">

                            <form class="custom-form contact-form" role="form" action="https://getform.io/f/47b01bd9-a75d-49e8-98e2-50d8584a5cf2" method="POST" name = "form">
                                <div class="row">

                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="form-floating">
                                            <input
                                                type="text"
                                                name="Name"
                                                id="name"
                                                class="form-control"
                                                placeholder="Name"
                                                required
                                                autoComplete='off'
                                            // value={registerUsers.name}
                                            // onChange={onRegisterUsers}
                                            />

                                            <label for="floatingInput">Name</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="form-floating">
                                            <input
                                                type="email"
                                                name="Email"
                                                id="email"
                                                pattern="[^ @]*@[^ @]*"
                                                class="form-control"
                                                placeholder="someone@gmail.com"
                                                required
                                                autoComplete='off'
                                            // value={registerUsers.email}
                                            // onChange={onRegisterUsers}
                                            />

                                            <label for="floatingInput">Email address</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="form-floating">
                                            <input
                                                type="text"
                                                name="Phone-number"
                                                id="name"
                                                class="form-control"
                                                placeholder="Phone Number"
                                                autoComplete='off'
                                            // value={registerUsers.name}
                                            // onChange={onRegisterUsers}
                                            />

                                            <label for="floatingInput">Phone Number</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="form-floating">
                                            <input
                                                type="text"
                                                name="Address"
                                                id="name"
                                                class="form-control"
                                                placeholder="Address"
                                                autoComplete='off'
                                            // value={registerUsers.name}
                                            // onChange={onRegisterUsers}
                                            />

                                            <label for="floatingInput">Address</label>
                                        </div>
                                    </div>


                                    {/* <div class="col-lg-3 col-md-6 col-6">
                                        <div class="form-check form-check-inline">
                                            <input
                                                name="websites"
                                                type="checkbox"
                                                class="form-check-input"
                                                id="inlineCheckbox1"
                                                value={registerUsers.websites}
                                                onChange={onRegisterUsers}
                                            />

                                            <label class="form-check-label" for="inlineCheckbox1">
                                                <i class="bi-globe form-check-icon"></i>
                                                <span class="form-check-label-text">Websites</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-md-6 col-6">
                                        <div class="form-check form-check-inline">
                                            <input
                                                name="gamedev"
                                                type="checkbox"
                                                class="form-check-input"
                                                id="inlineCheckbox2"
                                                value={registerUsers.gamedev}
                                                onChange={onRegisterUsers}

                                            />

                                            <label class="form-check-label" for="inlineCheckbox2">
                                                <i class="bi-controller form-check-icon"></i>
                                                <span class="form-check-label-text">Game Dev</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-md-6 col-6">
                                        <div class="form-check form-check-inline">
                                            <input
                                                name="ecommerce"
                                                type="checkbox"
                                                class="form-check-input"
                                                id="inlineCheckbox3"
                                                value={registerUsers.ecommerce}
                                                onChange={onRegisterUsers}

                                            />

                                            <label class="form-check-label" for="inlineCheckbox3">
                                                <i class="bi-phone form-check-icon"></i>
                                                <span class="form-check-label-text">Ecommerce</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-md-6 col-6">
                                        <div class="form-check form-check-inline me-0">
                                            <input
                                                name="seo"
                                                type="checkbox"
                                                class="form-check-input"
                                                id="inlineCheckbox4"
                                                value={registerUsers.seo}
                                                onChange={onRegisterUsers}

                                            />

                                            <label class="form-check-label" for="inlineCheckbox4">
                                                <i class="bi-google form-check-icon"></i>
                                                <span class="form-check-label-text">SEO</span>
                                            </label>
                                        </div>
                                    </div> */}

                                    <div class="col-lg-12 col-12">
                                        <div class="form-floating">
                                            <textarea
                                                type="text"
                                                name="Message"
                                                id="message"
                                                size="50"
                                                class="form-control"
                                                placeholder="Tell me about the project"
                                                required
                                                autoComplete='off'
                                            // value={registerUsers.messages}
                                            // onChange={onRegisterUsers}
                                            >
                                            </textarea>

                                            <label for="floatingTextarea">Tell me about the project</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-12 ms-auto">
                                        <button
                                            type="submit"
                                            value="submit"
                                            class="form-control"
                                            id="sub"

                                        // onClick={PortfolioUsers}
                                        >
                                            Submit
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs