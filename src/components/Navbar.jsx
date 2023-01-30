import { Link } from 'react-router-dom';
import NavLogo from '../images/projects/favicon_io1/NavLogo.png'
import LGresume from '../images/projects/Other files/LGresume.pdf'

const Navbar = () => {
    return (
        <>
            {/*//! Navbar */}
            <nav class="navbar navbar-expand-lg">
                <div class="container">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <Link to="/" class="navbar-brand mx-auto mx-lg-0">
                        <img src={NavLogo} alt="Navbar logo stating Lemon's initials" height="60" width="60" loading="lazy" /></Link>

                    <div class="d-flex align-items-center d-lg-none">
                        <a class="custom-btn btn" href={LGresume} download="lemon's resume">
                            Resume
                        </a>
                    </div>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-lg-5">
                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_1">Home</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_2">About</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_3">Services</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_4">Projects</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_5">Skills</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_6">My Team</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_7">Contact</a>
                            </li>
                        </ul>

                        <div class="d-lg-flex align-items-center d-none ms-auto">
                            {/* <i class="navbar-icon bi-telephone-plus me-3"></i> */}
                            <a class="custom-btn btn" href={LGresume} download="lemon's resume">
                                Resume
                            </a>
                            <button class="custom-btn btn">es</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;