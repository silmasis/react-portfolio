import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p> Hello, my name is Silavong. I am a Front-end Web Developer leveraging a background in Music and Customer Service to build an aesthetic and intuitive user experience on the web. I recently earned a certificate in Full Stack Development from the University of Central Florida, with newly developed skills in JavaScript, CSS, React.js, and responsive web design.</p> 
                <p> I am very passionate about turning creative ideas into amazing web apps, with a focus on visual design and development.</p>
                <p> I applied aspects of UI/UX and agile development in a recent project where I worked in a team of four  to develop a single-page MERN app that helps home-cooks look up new recipes with the ingredients they have right at home. </p>
            </Content>
        </div>
    );
}

export default AboutPage;