import React from "react";
import CompaniesLogo from "../components/CompaniesLogo";
import MyInfo from "../components/MyInfo";
import MyStory from "../components/MyStory";

const About = () => {
    return (
        <>
            <MyStory />
            <MyInfo />
            <CompaniesLogo />
        </>
    );
};

export default About;
