import React, { Component } from 'react';
import CardPage from './Cards';
import HeroSection from './Hero';
import HobbiesBox from './Hobbies';
import AboutMe from './AboutMe';
import { NavbarPage } from './NavBar';
import Current from './Current';
import PastBox from './Past';

class App extends Component {
    render() {
        return(
            <div id="container">
                <div class="sticky top-0 z-40">
                    <NavbarPage></NavbarPage>
                </div>

                <div> 
                    <HeroSection></HeroSection>
                    <AboutMe></AboutMe>
                    <Current></Current>
                    <PastBox></PastBox>
                    <HobbiesBox></HobbiesBox>
                </div>
            </div>
        );
    }
}

export default App;