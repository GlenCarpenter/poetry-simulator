import React from 'react';
import '../css/Header.css';
import { ParallaxBanner } from 'react-scroll-parallax';

const Header = ()=> {
    return (
        <div className="headerBackground">
            <ParallaxBanner
                layers={[
                    {
                        image: process.env.PUBLIC_URL + '/Header.jpg',
                        amount: 0.8,
                        zIndex: 0
                    }
                ]}
                style={{
                    height: '200px',
                }}>
                <div className="headerContent">
                    <div className="headerText">
                        Poetry Simulator
                    </div>
                </div>
            </ParallaxBanner>
        </div>
    );
};

export default Header;