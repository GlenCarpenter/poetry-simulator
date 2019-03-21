import React from 'react';
import Header from './Header';
import { ParallaxProvider } from 'react-scroll-parallax';
import PoemGenerator from './PoemGenerator';

const App = ()=> {

    return(
        <div>
            <ParallaxProvider>
                <Header />
                <PoemGenerator />
            </ParallaxProvider>
        </div>
    );
};

export default App;