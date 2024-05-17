import React from 'react'
import aboutBanner from '../../assets/AboutBanner.svg';
import Banner from '../../components/Banner/banner'
import Collapse  from '../../components/Collapse/collapse';
import './about.scss'

function About({data}) {
    return (
        <div className="about">
            <Banner className="banner" img={aboutBanner} />
            <div className="collapse__about">
            {data.map((elem) =>(
                <Collapse  
                    title = {elem.title}
                    text = {elem.description} />
                )
            )}
            </div>
        </div>
    )
  };
  
  export default About;